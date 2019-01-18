import React from 'react';
import './OverviewList.css';
import {DataItem, DataItemLine} from './DataItemLine';

interface OverviewListProps {
    name: string;
    dataItems: DataItem[];
}

// This is the one which should be responsible for what should happen when something is being edited!
function OverviewList(props: OverviewListProps){
    let dataItemList = props.dataItems.map(dataItem => {
        return <DataItemLine key={dataItem.id} id={dataItem.id} title={dataItem.title} subtitle={dataItem.subtitle} isEditable={dataItem.isEditable} />
    });

    return (
        <span>
            <h3>{props.name}</h3>
            {dataItemList}
        </span>
    );
}

export default OverviewList;