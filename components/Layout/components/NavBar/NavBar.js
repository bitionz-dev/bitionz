import SearchBar from "../Shared/SearchBar/SearchBar";
import FilterButton from "./components/FilterButton/FilterButton";
import PromoteButton from "./components/PromoteButton/PromoteButton";
import Logo from "./components/Logo/Logo"
import Icons from "./components/Icons/Icons"
import {useMediaQuery} from "react-responsive";
import LangSelector from "../Shared/LangSelector/LangSelector";
import styles from "./NavBar.module.css"

export default function NavBar() {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const isTabletOrMobile = useMediaQuery({maxWidth: 1224})
    return (
        <nav
            className={styles.navContainer}>
            <div className={styles.logoContainer}>
                <Logo/>
            </div>
            <div className={styles.menuContainer}>
                <div className={styles.searchContainer}>
                    {isDesktopOrLaptop && <SearchBar className={'tw-col-start-3 tw-col-end-8'} width={700}/>}
                    {isDesktopOrLaptop && <FilterButton className={'tw-col-start-8 tw-col-end-9'}/>}
                </div>
                <div className={styles.promoteContainer}>
                    {isDesktopOrLaptop && <PromoteButton className={'tw-col-start-9 tw-col-end-11'}/>}
                    {isDesktopOrLaptop && <LangSelector className={'tw-col-start-9 tw-col-end-11'}/>}
                </div>
                {isTabletOrMobile && <Icons/>}
            </div>
        </nav>
    )
}