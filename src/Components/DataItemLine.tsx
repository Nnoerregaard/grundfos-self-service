import React from 'react';
import './DataItemLine.css';

import deleteIcon from './../resources/delete.png';
import editIcon from './../resources/edit.png'

export interface DataItem {
    id: number;
    title: string;
    subtitle: string;
    isEditable: boolean;
}

export function DataItemLine(props: DataItem){
    return (
        <div key={props.id} className="DataItemLine">
            {props.isEditable && 
            <span>
                <img className="ActionIcon" src={deleteIcon} />
                <img className="ActionIcon" src={editIcon} />
            </span>}
            <span className="Title">{props.title}</span><span className="Subtitle">{props.subtitle}</span>
        </div>
    );
}
