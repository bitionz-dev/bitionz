import * as React from 'react';
import Search from "./components/Search"
import Menu from "./components/Menu"
import styles from "./Icons.module.css"
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {useContext} from "react";
import {LayoutContext} from "../../../../../Tools/Context/Context";

export default function Icons() {
    const {showLowerNavBar, setShowLowerNavBar} = useContext(LayoutContext);
    return (<div className={styles.iconsGrid}>
        <Search/>
        <FilterAltIcon className={styles.filterButton} onClick={() => setShowLowerNavBar(!showLowerNavBar)}/>
        <Menu/>
    </div>);
}