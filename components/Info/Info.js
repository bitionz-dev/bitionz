import * as React from 'react';
import MessageIcon from '@mui/icons-material/Message';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import styles from './Info.module.css'
import {Button, Chip} from "@mui/material";
import {useTranslation} from "react-i18next";

export default function Info({category, name, description, technicalDoc, webUrl, chat, twitter, sourceCode, reddit}) {
    const {t} = useTranslation();
    return (<div className={styles.container}>
        <Chip label={category} variant="outlined" className={styles.chip}/>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        {technicalDoc && <div className={styles.tecDocContainer}>
            <PictureAsPdfIcon/>
            <a href={technicalDoc}>{t("Technical document")}</a>
        </div>}

        <Button variant="contained" className={`${styles.moreButton}`}
                onClick={() => window.open(webUrl, "_blank") || window.location.replace(webUrl)}>{t("Go to the website")}</Button>
        <div className={styles.iconsContainer}>
            {chat && <MessageIcon onClick={() => window.location.replace(chat)}/>}
            {twitter && <TwitterIcon onClick={() => window.location.replace(twitter)}/>}
            {sourceCode && <GitHubIcon onClick={() => window.location.replace(sourceCode)}/>}
            {reddit && <RedditIcon onClick={() => window.location.replace(reddit)}/>}
        </div>
    </div>);
}