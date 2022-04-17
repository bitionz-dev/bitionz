import * as React from 'react';
import Search from "../Icons/Search";
import styles from './NoResult.module.css'
import {useTranslation} from "react-i18next";

export default function NoResult() {
    const {t} = useTranslation();
    return (<div className={styles.container}>
        <Search className={styles.icon}/>
        <h2 className={styles.title}>{t("No results found")}</h2>
        <p className={styles.description}>{t("Try another term")}</p>
    </div>)
}