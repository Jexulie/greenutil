import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const Memory = props => {
    return (
        <div className="memory container">
            <div className="header center">
                <h2>Memory-Monitor</h2>
                <div className="info">
                    <p>Available Memory: {props.memory.available} Gb</p>
                    <p>Free Memory: {props.memory.free} Gb</p>
                    <p>Total Memory: {props.memory.total} Gb</p>
                    <p>Used Memory: {props.memory.used} Gb</p>
                </div>
            </div>
            <div className="charts">
                <Bar 
                    data={
                        {
                            labels: props.time,
                            datasets:[
                                {
                                    label: 'Memory Percent',
                                    fill:false,
                                    LineTension: 0.1,
                                    borderColor: '#ff0000',
                                    backgroundColor: '#ff0000',
                                    borderCapStyle: 'butt',
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: '#fff',
                                    pointBackgroundColor:'#fff',
                                    pointHoverBackgroundColor: 'rgba(225,0,0,.5)',
                                    pointHoverBorderColor: 'rgba(112,112,0,.5)',
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 15,
                                    pointHitRadius:25,
                                    pointRadius:1,
                                    data: props.memory.used_percent,
                                }
                            ]
                        }
                    } 
                    width={250} 
                    height={250}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        </div>
    )
}

export default Memory;