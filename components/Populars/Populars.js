import * as React from 'react';
import {useMediaQuery} from "react-responsive";
import {useContext, useState} from "react";
import {LayoutContext} from "../Tools/Context/Context";
import useSWR from "swr";
import styles from "./Populars.module.css";
import FooterCard from "../Shared/FooterCard/FooterCard";
import MoreButton from "../Shared/MoreButton/MoreButton";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Populars() {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const {filteredTokens} = useContext(LayoutContext);
    const [more, setMore] = useState(false);
    let sliced = []
    if (isDesktopOrLaptop) {
        if (filteredTokens.length > 8) {
            sliced = filteredTokens.slice(4, 16)
        } else {
            sliced = filteredTokens.slice(0, 12)
        }
    } else {
        if (filteredTokens.length > 8) {
            if (more) {
                sliced = filteredTokens.slice(4, 12)
            } else {
                sliced = filteredTokens.slice(4, 8)
            }
        } else {
            if (more) {
                sliced = filteredTokens.slice(0, 8)
            } else {
                sliced = filteredTokens.slice(0, 4)
            }

        }
    }
    const popularTokens = []
    sliced.forEach((token) => popularTokens.push(token.id))
    const {data, error} = useSWR(`/api/detail?id=${popularTokens.toString()}`, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    if (!data.data) return <div>No se encontraron resultados, prueba otra vez cambiando los filtros</div>
    const detailData = Object.values(data.data)

    return (
        <div className={styles.populars}>
            <h2 className={styles.title}>Populares</h2>
            <div className={styles.popularsContainer}>
                {detailData.map((token) => {
                    return (
                        <FooterCard title={token.name} text={token.description.split(".")[0]} imgURL={token.logo}/>
                    )
                })}
            </div>
            {(!isDesktopOrLaptop && !more && filteredTokens.length > 4) && <MoreButton setMore={setMore}/>}
        </div>
    );
}