import * as React from 'react';
import {Card} from "react-bootstrap";
import styles from './LargeImage.module.css'

export default function LargeImage({imgURL, altText}) {
    return (
        <Card className={styles.container}>
            <Card.Img src={imgURL} alt={altText} className={styles.image}/>
        </Card>
    );
}