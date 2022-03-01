import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./styles.module.css"
import {useContext} from "react";
import {LayoutContext} from "../../../../../../Tools/Context/Context";

export default function Menu() {
    const {showDrawerMenu, setShowDrawerMenu} = useContext(LayoutContext);
    return <MenuIcon className={styles.search} onClick={() => setShowDrawerMenu(!showDrawerMenu)}/>;
}