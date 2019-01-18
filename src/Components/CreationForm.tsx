import React from 'react';
import './CreationForm.css';

interface CreationFormProps {
    elements: FormElement[];
    creationTitle: string;
}

// Consider extending this to also include an onChange handler!
interface FormElement {
    name: string;
    type: string;
    initialValue: string;
}

function CreationForm(props: CreationFormProps) {
    let key: number = 0;
    return (
        <div className="MainDiv">
            <h3 className="Title">{props.creationTitle}</h3>
            {props.elements.map(element => {
                key++;
                return (
                <span key={key}>
                    {element.name}:
                    <input className="Input" type={element.type} value={element.initialValue} />
                </span>
                );
            })}
            <button>{props.creationTitle}</button>
        </div>
    );
}

export default CreationForm;