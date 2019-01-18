import React from 'react';
import './CreationForm.css';

interface CreationFormProps {
    elements: FormElement[];
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
        <div>
            {props.elements.map(element => {
                key++;
                return (
                <span className="InputElement" key={key}>
                    {element.name}
                    <input className="Input" type={element.type} value={element.initialValue} />
                </span>
                );
            })}
            <button>Opret begivenhed</button>
        </div>
    );
}

export default CreationForm;