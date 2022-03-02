import * as React from 'react';
import Search from "./components/Search"
import Menu from "./components/Menu"
import FilterIcon from "../../../Shared/FilterIcon/FilterIcon";
import styles from "./Icons.module.css"
import {useContext} from "react";
import {LayoutContext} from "../../../../../Tools/Context/Context";


export default function Icons() {
    const {showLowerSearchSection} = useContext(LayoutContext)
    return (<div className={styles.iconsGrid}>
        {!showLowerSearchSection && <Search/>}
        <FilterIcon/>
        <Menu/>
    </div>);
}