import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Banner from '../components/Shared/Banner/Banner';
import Suggestions from '../components/Suggestions/Suggestions';
import Populars from "../components/Populars/Populars";
import LowerBanner from "../components/LowerBanner/LowerBanner";
import Script from "next/script";
import {useMediaQuery} from "react-responsive";
import {loadTokens} from "../lib/fetch-tokens";
import {useEffect} from "react";
import Page from "../components/Tools/Page/Page";

export default function Home({tokens, setTokens}) {
    const page = {
        name: "Bitionz",
        meta: {
            name: "bitionz",
            description: "main page of bitionz"
        },
        bootstrap: true
    }
    useEffect(() => {
        setTokens(tokens)
    }, [tokens])
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const isBigScreen = useMediaQuery({minWidth: 1824})
    const isTabletOrMobile = useMediaQuery({maxWidth: 1224})
    const isPortrait = useMediaQuery({orientation: 'portrait'})
    const isRetina = useMediaQuery({minResolution: '2dppx'})
    return (<div className={styles.container}>
        <main className={styles.main}>
            <Banner/>
            <Suggestions/>
            <Populars/>
            <LowerBanner/>
        </main>
    </div>)
}


export async function getStaticProps() {
    let data = await loadTokens()
    return {props: {tokens: data?.data?.coins}}
}