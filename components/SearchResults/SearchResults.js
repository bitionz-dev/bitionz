import * as React from 'react';
import {useMediaQuery} from "react-responsive";
import {useState} from "react";
import useSWR from "swr";
import styles from "./SearchResults.module.css";
import FooterCard from "../Shared/FooterCard/FooterCard";
import {Button, Skeleton} from "@mui/material";

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
    if (data?.length < 1) return <div>No se encontraron resultados, prueba otra vez cambiando los filtros</div>
    const detailData = data && Object.values(data)
    return (
        <div className={styles.populars}>
            <h2 className={styles.title}>Tus resultados de: {id}</h2>
            <div className={styles.popularsContainer}>
                {data ? detailData.map((token) => {
                    return (
                        <FooterCard title={token.name} text={token.description.split(".")[0]} imgURL={token.logo}/>
                    )
                }) : popularTokens.map((token) => {
                    return (
                        <Skeleton variant="rectangular" width={317} height={230}>
                            <FooterCard title={"demo"}
                                        text={"small text amount to include the size of a footer card"}
                                        imgURL='https://cjpoeqgxfkzoleidhjwu.supabase.co/storage/v1/object/public/bitionz/placeholders/2300'/>
                        </Skeleton>
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