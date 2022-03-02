import SearchBar from "../Shared/SearchBar/SearchBar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useContext} from "react";
import {LayoutContext} from "../../../Tools/Context/Context";


export default function LowerSearchSection() {
    const {showLowerSearchSection, setShowLowerSearchSection} = useContext(LayoutContext)
    return (
        <nav
            className={'tw-container tw-bg-violet-900 sm:tw-px-5 tw-py-5 tw-grid tw-grid-cols-8 tw-gap-2 tw-content-center tw-items-center'}>
            <ArrowBackIcon style={{color: "white"}} onClick={() => setShowLowerSearchSection(!showLowerSearchSection)}/>
            <SearchBar className={'tw-col-start-2 tw-col-end-8'} width={280}/>
        </nav>
    )
}