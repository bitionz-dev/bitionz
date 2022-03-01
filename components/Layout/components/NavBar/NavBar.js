import SearchBar from "./components/SearchBar/SearchBar";
import FilterButton from "./components/FilterButton/FilterButton";
import PromoteButton from "./components/PromoteButton/PromoteButton";
import Logo from "./components/Logo/Logo"
import Icons from "./components/Icons/Icons"
import {useMediaQuery} from "react-responsive";

export default function NavBar() {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const isTabletOrMobile = useMediaQuery({maxWidth: 1224})
    return (
        <nav
            className={'tw-container tw-bg-violet-900 sm:tw-px-5 tw-py-5 tw-grid tw-grid-cols-2 lg:tw-grid-cols-10 tw-gap-2 lg:tw-gap-4 tw-content-center'}>
            <Logo/>
            {isDesktopOrLaptop && <SearchBar className={'tw-col-start-3 tw-col-end-8'}/>}
            {isDesktopOrLaptop && <FilterButton className={'tw-col-start-8 tw-col-end-9'}/>}
            {isDesktopOrLaptop && <PromoteButton className={'tw-col-start-9 tw-col-end-11'}/>}
            {isTabletOrMobile && <Icons/>}
        </nav>
    )
}