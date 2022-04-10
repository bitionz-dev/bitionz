import * as React from 'react';
import MessageIcon from '@mui/icons-material/Message';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import styles from './Info.module.css'
import {Button, Chip} from "@mui/material";
import {useRouter} from "next/router";

export default function Info({category, name, description, technicalDoc, webUrl, chat, twitter, sourceCode, reddit}) {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <Chip label={category} variant="outlined" className={styles.chip}/>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.description}>{description}</p>
            <div className={styles.tecDocContainer}>
                <PictureAsPdfIcon/>
                <a href={technicalDoc}>Documento técnico</a>
            </div>

            <Button variant="contained" className={`${styles.moreButton}`}
                    onClick={() => window.location.replace(webUrl)}>Ir
                al
                sitio</Button>
            <div className={styles.iconsContainer}>
                {chat && <MessageIcon onClick={() => window.location.replace(chat)}/>}
                {twitter && <TwitterIcon onClick={() => window.location.replace(twitter)}/>}
                {sourceCode && <GitHubIcon onClick={() => window.location.replace(sourceCode)}/>}
                {reddit && <RedditIcon onClick={() => window.location.replace(reddit)}/>}
            </div>
        </div>
    );
}