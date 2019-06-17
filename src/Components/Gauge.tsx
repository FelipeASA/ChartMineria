// @ts-ignore
import React from 'react';
//@ts-ignore
import GaugeChart from 'react-gauge-chart';


function Gauge(){

    return(
        <>
            <GaugeChart id="gauge-chart1" percent={0.4} arcWidth={0.3} marginInPercent={0.05} />
        </>
    )
}

export default Gauge
