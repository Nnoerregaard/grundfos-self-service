import React from 'react';
import './DataItemLine.css';

import deleteIcon from './../resources/delete.png';
import editIcon from './../resources/edit.png'

export interface DataItem {
    id: number;
    title: string;
    subtitle: string;
}

export function DataItemLine(props: DataItem){
    return (
        <div key={props.id} className="DataItemLine">
            <img className="ActionIcon" src={deleteIcon} />
            <img className="ActionIcon" src={editIcon} />
            {props.title} <span className="Subtitle">{props.subtitle}</span>
        </div>
    );
}
