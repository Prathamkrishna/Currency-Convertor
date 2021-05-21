import React from 'react';
import {Chart} from 'react-charts';

export default function ChartFunction(){
    const axes = React.useMemo(
        () => [
            {primary: true, type: 'linear', position: 'bottom'},
            {type: 'linear', position: 'left'},
        ],
        []
    )

    return(
        <div style={{width: '400px', height: '300px'}}>
            <Chart axes={axes} />
        </div>
    )
}
