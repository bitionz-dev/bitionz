import * as React from 'react';
import Speaker from "../Icons/Speaker";
import styles from './PromoteBanner.module.css'
import {useTranslation} from "react-i18next";

export default function PromoteBanner() {
    const {t} = useTranslation();
    return (<div className={styles.container}>
        <Speaker className={styles.icon}/>
        <h2 className={styles.title}>{t("Promote your metaverse")}</h2>
    </div>)
}