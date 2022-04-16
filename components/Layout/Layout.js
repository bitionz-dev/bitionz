import NavBar from "./components/NavBar/NavBar";
import {LayoutContext} from "../Tools/Context/Context"
import {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import LowerSearchSection from "./components/LowerSearchSection/LowerSearchSection";
import FilterBar from "./components/FilterBar/FilterBar";
import Footer from "../Shared/Footer/Footer";
import DrawerMenu from "./components/Shared/DrawerMenu/DrawerMenu";

export default function Layout({children, tokens}) {
    const isTabletOrMobile = useMediaQuery({maxWidth: 1224})
    const [showLowerSearchSection, setShowLowerSearchSection] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [blockchainsFilter, setBlockchainsFilter] = useState([]);
    const [typesFilter, setTypesFilter] = useState([]);
    const [nftFilter, setNftFilter] = useState(false);
    const [filteredTokens, setFilteredTokens] = useState(tokens);
    const [showDrawerMenu, setShowDrawerMenu] = useState(false);
    const [lang, setLang] = useState("en");
    useEffect(() => {
        setFilteredTokens(tokens)
    }, [tokens])
    return (
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
            <NavBar/>
            {showDrawerMenu && <DrawerMenu/>}
            {showFilters && <FilterBar/>}
            {showLowerSearchSection && isTabletOrMobile && <LowerSearchSection/>}
            <main>{children}</main>
            <Footer/>
        </LayoutContext.Provider>
    )
}