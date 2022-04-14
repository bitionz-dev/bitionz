import * as React from 'react';
import Speaker from "../Icons/Speaker";
import styles from './AboutBanner.module.css'
import Space from "../Icons/Space";
import {useMediaQuery} from "react-responsive";

export default function AboutBanner() {
    const isTabletOrMobile = useMediaQuery({maxWidth: 1224})
    return (<div className={styles.container}>
        {!isTabletOrMobile && <h2 className={styles.title}>About Us</h2>}
        <Space className={styles.icon}/>
    </div>)
}