import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Banner from '../components/Shared/Banner/Banner';
import Suggestions from '../components/Suggestions/Suggestions';
import Populars from "../components/Populars/Populars";
import LowerBanner from "../components/LowerBanner/LowerBanner";
import Footer from "../components/Shared/Footer/Footer";
import Script from "next/script";
import {useMediaQuery} from "react-responsive";
import {loadTokens} from "../lib/fetch-tokens";
import {useEffect} from "react";

export default function Home({tokens, setTokens}) {
    useEffect(() => {
        setTokens(tokens)
    }, [tokens])
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const isBigScreen = useMediaQuery({minWidth: 1824})
    const isTabletOrMobile = useMediaQuery({maxWidth: 1224})
    const isPortrait = useMediaQuery({orientation: 'portrait'})
    const isRetina = useMediaQuery({minResolution: '2dppx'})
    return (<div className={styles.container}>
        <Head>
            <title>Bitionz</title>
            <meta name="Bitionz" content="Search engine metaverse token"/>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
            <link rel="icon" href="/favicon.ico"/>
            <Script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></Script>

            <Script
                src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                crossOrigin></Script>

            <Script
                src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossOrigin></Script>
        </Head>
        <main className={styles.main}>
            <Banner/>
            <Suggestions/>
            <Populars/>
            <LowerBanner/>
            <Footer/>
        </main>
    </div>)
}


export async function getStaticProps() {
    let data = await loadTokens()
    return {props: {tokens: data?.data?.coins}}
}