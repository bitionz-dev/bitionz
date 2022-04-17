import * as React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from '../Footer.module.css'
import {useRouter} from "next/router";
import Link from 'next/link'
import {useTranslation} from "react-i18next";


export default function Social() {
    const {t} = useTranslation();
    const router = useRouter()
    return (<div className={styles.socials}>
        <Link href="/about">
            <a>{t("About us")}</a>
        </Link>
        <div className={styles.socialsIcons}>
            <a href={"#"}> <EmailIcon/></a>
            <a href={"#"}> <InstagramIcon/></a>
            <a href={"#"}> <FacebookIcon/></a>
        </div>
    </div>);
}