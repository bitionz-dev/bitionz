import * as React from 'react';
import {useMediaQuery} from "react-responsive";
import {useContext, useState} from "react";
import {LayoutContext} from "../Tools/Context/Context";
import useSWR from "swr";
import styles from "./Populars.module.css";
import FooterCard from "../Shared/FooterCard/FooterCard";
import MoreButton from "../Shared/MoreButton/MoreButton";
import {Skeleton} from "@mui/material";
import NoResult from "../Shared/NoResult/NoResult";
import Error from "../Shared/Error/Error";
import {useRouter} from "next/router";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Populars() {
    const router = useRouter()
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
    if (error) return <Error/>
    if (data?.length < 1) return <NoResult/>
    const detailData = data && Object.values(data)
    return (
        <div className={styles.populars}>
            <h2 className={styles.title}>Populares</h2>
            <div className={styles.popularsContainer}>
                {data ? detailData.map((token) => {
                    return (
                        <FooterCard title={token.name} text={token.description.split(".")[0]} imgURL={token.logo}
                                    onClick={() => router.push(`/detail/${token.id}?source=populars`)}/>
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
            {(!isDesktopOrLaptop && !more && filteredTokens.length > 4) && <MoreButton setMore={setMore}/>}
        </div>
    );
}