import * as React from 'react';
import {Card} from "react-bootstrap";
import styles from './LargeImage.module.css'

export default function LargeImage({imgURL, altText, suggested}) {
    return (
        <Card className={!suggested ? styles.container : styles.suggestedContainer}>
            <Card.Img src={imgURL} alt={altText} className={suggested ? styles.image : styles.imageCommon}/>
        </Card>
    );
}