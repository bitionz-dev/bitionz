import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useMediaQuery} from "react-responsive";
import {loadTokens} from "../lib/fetch-tokens";
import {useEffect} from "react";

export default function Home({tokens, setTokens}) {
    useEffect(() => {
        setTokens(tokens)
    }, [])
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const isBigScreen = useMediaQuery({minWidth: 1824})
    const isTabletOrMobile = useMediaQuery({maxWidth: 1224})
    const isPortrait = useMediaQuery({orientation: 'portrait'})
    const isRetina = useMediaQuery({minResolution: '2dppx'})
    return (<div className={styles.container}>
        <Head>
            <title>Bitionz</title>
            <meta name="Bitionz" content="Search engine metaverse token"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main className={styles.main}>
            <h1>
                Tokens
            </h1>
            <h1 className="text-3xl font-bold tw-bg-violet-900 tw-text-black">
                Hello world!
            </h1>
        </main>
    </div>)
}


export async function getStaticProps() {
    let data = await loadTokens()
    return {props: {tokens: data.data.coins}}
}