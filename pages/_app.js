import '../styles/globals.css'
import Layout from "../components/Layout/Layout";
import {useState} from "react";

function MyApp({Component, pageProps}) {
    const [tokens, setTokens] = useState([])
    return <Layout tokens={tokens}>
        <Component {...pageProps} setTokens={setTokens}/>
    </Layout>
}


export default MyApp
