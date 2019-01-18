import React from 'react';
import './FrontpageCard.css';

interface FrontpageCardProps {
    title: string;
    image: string;
}

function FrontpageCard(props: FrontpageCardProps) {
    return (
        <div className="Card">
            <div className="Title">{props.title}</div>
            <img src={props.image} alt={props.title}  className="Image" />
        </div>
    );
}

export default FrontpageCard;