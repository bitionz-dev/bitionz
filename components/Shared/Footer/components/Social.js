import * as React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from '../Footer.module.css'
import {useRouter} from "next/router";
import Link from 'next/link'
import {useTranslation} from "react-i18next";
import Logo from "./logo/Logo";


export default function Social() {
    const {t} = useTranslation();
    const router = useRouter()
    return (<div className={styles.socials}>
        <Logo></Logo>
    </div>);
}