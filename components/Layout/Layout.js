import NavBar from "./components/NavBar/NavBar";
import React from 'react'
import {LayoutContext} from "../Tools/Context/Context"
import {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'
import LowerSearchSection from "./components/LowerSearchSection/LowerSearchSection";
import FilterBar from "./components/FilterBar/FilterBar";
import Footer from "../Shared/Footer/Footer";
import DrawerMenu from "./components/Shared/DrawerMenu/DrawerMenu";
import Page from "../Tools/Page/Page";


export default function Layout({children, tokens}) {
    Bugsnag.start({
        apiKey: '5b72d4f682e56ccf804edbefc1d52696',
        plugins: [new BugsnagPluginReact()]
    })
    const ErrorBoundary = Bugsnag.getPlugin('react')
        .createErrorBoundary(React)
    const isTabletOrMobile = useMediaQuery({maxWidth: 1224})
    const [showLowerSearchSection, setShowLowerSearchSection] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [blockchainsFilter, setBlockchainsFilter] = useState([]);
    const [typesFilter, setTypesFilter] = useState([]);
    const [nftFilter, setNftFilter] = useState(false);
    const [filteredTokens, setFilteredTokens] = useState(tokens);
    const [showDrawerMenu, setShowDrawerMenu] = useState(false);
    const [lang, setLang] = useState("en");
    const page = {
        name: "Bitionz | Promote",
        meta: {
            name: "bitionz promote",
            description: "promote section of bitionz"
        },
        bootstrap: true,
        email: true
    }
    useEffect(() => {
        setFilteredTokens(tokens)
    }, [tokens])
    return (
        <ErrorBoundary>
            <LayoutContext.Provider value={{
                setShowLowerSearchSection: setShowLowerSearchSection,
                showLowerSearchSection: showLowerSearchSection,
                showFilters: showFilters,
                setShowFilters: setShowFilters,
                showDrawerMenu: showDrawerMenu,
                setShowDrawerMenu: setShowDrawerMenu,
                filters: {
                    blockchains: blockchainsFilter,
                    setBlockchains: setBlockchainsFilter,
                    types: typesFilter,
                    setTypes: setTypesFilter,
                    nft: nftFilter,
                    setNft: setNftFilter
                },
                tokens: tokens,
                setFilteredTokens: setFilteredTokens,
                filteredTokens: filteredTokens,
                lang: lang,
                setLang: setLang
            }}>
                <Page title={page.title} meta={page.meta} bootstrap={page.bootstrap}/>
                <NavBar/>
                {showDrawerMenu && <DrawerMenu/>}
                {showFilters && <FilterBar/>}
                {showLowerSearchSection && isTabletOrMobile && <LowerSearchSection/>}
                <hr className={"navBarLine"}/>
                <main>{children}</main>
                <hr className={"navBarLineFooter"}/>
                <Footer/>
            </LayoutContext.Provider>
        </ErrorBoundary>
    )
}