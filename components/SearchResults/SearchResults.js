import * as React from 'react';
import {useMediaQuery} from "react-responsive";
import {useContext, useState} from "react";
import {LayoutContext} from "../Tools/Context/Context";
import useSWR from "swr";
import styles from "./SearchResults.module.css";
import FooterCard from "../Shared/FooterCard/FooterCard";
import MoreButton from "../Shared/MoreButton/MoreButton";
import CircularProgress from '@mui/material/CircularProgress';
import {Button} from "@mui/material";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function SearchResults({filteredTokens, id}) {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const [more, setMore] = useState(false);
    const [desktopLimit, setDesktopLimit] = useState(12);
    const [mobileLimit, setMobileLimit] = useState(4);
    let sliced = []
    if (isDesktopOrLaptop) {
        sliced = filteredTokens.slice(0, desktopLimit)
    } else {
        sliced = filteredTokens.slice(0, mobileLimit)
    }

    const popularTokens = []
    sliced.forEach((token) => popularTokens.push(token.id))
    const {data, error} = useSWR(`/api/detail?id=${popularTokens.toString()}`, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data && !more) return <CircularProgress className={styles.circular}/>
    if (data.length < 1) return <div>No se encontraron resultados, prueba otra vez cambiando los filtros</div>
    const detailData = Object.values(data)
    console.log(filteredTokens.length, isDesktopOrLaptop)
    return (
        <div className={styles.populars}>
            <h2 className={styles.title}>Tus resultados de: {id}</h2>
            <div className={styles.popularsContainer}>
                {detailData.map((token) => {
                    return (
                        <FooterCard title={token.name} text={token.description.split(".")[0]} imgURL={token.logo}/>
                    )
                })}
            </div>
            {((isDesktopOrLaptop && filteredTokens.length > desktopLimit) || (!isDesktopOrLaptop && filteredTokens.length > mobileLimit)) &&
                <Button variant="contained" className={`${styles.moreButton}`} onClick={() => {
                    setDesktopLimit(desktopLimit + 8)
                    setMobileLimit(mobileLimit + 4)
                    setMore(true)
                }}>Descubrir
                    más</Button>}
        </div>
    );
}