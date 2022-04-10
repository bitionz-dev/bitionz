import * as React from 'react';
import {Card} from "react-bootstrap";

export default function FullCard({title, text, imgURL, altText, onClick, onTouchStart}) {
    return (
            <Card className="bg-dark text-white" onClick={onClick} style={{cursor: 'pointer'}}
                  onTouchStart={onTouchStart}>
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