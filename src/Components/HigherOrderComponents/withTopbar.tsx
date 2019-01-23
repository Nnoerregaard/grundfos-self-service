import React from 'react';
import './withTopbar.css';

import backBtn from './../../resources/back.png';

interface TopbarProps {
    title: string;
    goBack: () => void;
}

function withTopbar(WrappedComponent: any, data: TopbarProps) {
    return (props: object) => {
        return (
            <div>
                <img className="BackBtn" src={backBtn} onClick={data.goBack} />
                <div className="Topbar">{data.title}</div>
                <WrappedComponent {...props} />
            </div>
        );
    }
}

export default withTopbar