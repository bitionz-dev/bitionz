import * as React from 'react';
import {Card} from "react-bootstrap";

export default function FullCard({title, text, imgURL, altText}) {
    return (
        <Card className="bg-dark text-white">
            <Card.Img src={imgURL} alt={altText}/>
            <Card.ImgOverlay>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}