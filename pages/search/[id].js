import {useContext} from "react";
import {LayoutContext} from "../../components/Tools/Context/Context";
import SearchResults from "../../components/SearchResults/SearchResults";
import {useRouter} from "next/router";
import Head from "next/head";
import Script from "next/script";

export default function Search() {
    const router = useRouter();
    const {id} = router.query
    const {filteredTokens} = useContext(LayoutContext);
    const searchResultTokens = filteredTokens.filter((token) => {
        console.log(token.name.toLowerCase().includes(id.toLowerCase()))
        if (token.name.toLowerCase().includes(id.toLowerCase())) return true
        const foundTag = token.tags.find(tag => tag.toLowerCase().includes(id.toLowerCase()))
        return foundTag !== undefined;

    })
    console.log(searchResultTokens)
    return (
        <>
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
            </Head>
            <Script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></Script>

            <Script
                src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                crossOrigin></Script>

            <Script
                src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossOrigin></Script>
            <SearchResults filteredTokens={searchResultTokens} id={id}/>
        </>
    )


}