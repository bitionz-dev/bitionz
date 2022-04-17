import * as React from 'react';
import styles from './Error.module.css'
import CloudOffTwoToneIcon from '@mui/icons-material/CloudOffTwoTone';
import {useTranslation} from "react-i18next";

export default function Error() {
    const {t} = useTranslation();
    return (<div className={styles.container}>
        <CloudOffTwoToneIcon className={styles.icon}/>
        <h2 className={styles.title}>{t("Something went wrong")}</h2>
        <p className={styles.description}>{t("Try again later while we fix the issue")}</p>
    </div>)
}