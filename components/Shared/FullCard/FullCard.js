import * as React from 'react';
import {Card} from "react-bootstrap";

export default function FullCard({title, text, imgURL, altText, onClick}) {
    return (
        <Card className="bg-dark text-white" onClick={onClick} style={{cursor: 'pointer'}}>
            <Card.Img src={imgURL} alt={altText} onClick={onClick} style={{cursor: 'pointer'}}/>
            <Card.ImgOverlay onClick={onClick} style={{cursor: 'pointer'}}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}