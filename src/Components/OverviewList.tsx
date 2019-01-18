import React from 'react';
import './OverviewList.css';
import {DataItem, DataItemLine} from './DataItemLine';

interface OverviewListProps {
    name: string;
    dataItems: DataItem[];
}

function OverviewList(props: OverviewListProps){
    let dataItemList = props.dataItems.map(dataItem => {
        return <DataItemLine key={dataItem.id} id={dataItem.id} title={dataItem.title} subtitle={dataItem.subtitle} />
    });

    return (
        <div className="OverviewList">
            <h3>{props.name}</h3>
            {dataItemList}
        </div>
    );
}

export default OverviewList;