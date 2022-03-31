import * as React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from '../Footer.module.css'


export default function Social() {
    return (<div className={styles.socials}>
        <a href={"#"}>Nosotros</a>
        <div className={styles.socialsIcons}>
            <a href={"#"}> <EmailIcon/></a>
            <a href={"#"}> <InstagramIcon/></a>
            <a href={"#"}> <FacebookIcon/></a>
        </div>
    </div>);
}