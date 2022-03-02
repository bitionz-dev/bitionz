import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./styles.module.css"
import {useContext} from "react";
import {LayoutContext} from "../../../../../../Tools/Context/Context";

export default function Search() {
    const {showLowerSearchSection, setShowLowerSearchSection} = useContext(LayoutContext)
    return <SearchIcon className={styles.search} onClick={() => setShowLowerSearchSection(!showLowerSearchSection)}/>
}