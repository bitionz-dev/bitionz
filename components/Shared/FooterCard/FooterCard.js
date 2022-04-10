import * as React from 'react';
import {Card} from "react-bootstrap";
import styles from "./Footercard.module.css"

export default function FooterCard({title, text, imgURL, onClick}) {
    return (
        <Card className={styles.cardLatest} onClick={onClick}>
            <Card.Img variant="top" src={imgURL}/>
            <Card.Body className={styles.cardBody}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}