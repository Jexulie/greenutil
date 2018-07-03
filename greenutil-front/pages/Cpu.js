import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const Cpu = props => {
    return (
        <div className="cpu container">
            <div className="header center">
                <h2>Cpu-Monitor</h2>
                <div className="info">
                    <p>Cpu Count: {props.cpu.cpu_count}</p>
                    <p>Cpu Frequency: {props.cpu.cpu_freq} GHz</p>
                </div>
            </div>
            <div className="charts">
            <Bar 
                data={
                    {
                        labels: props.time,
                        datasets:[
                            {
                                label: 'Cpu Percent',
                                fill:false,
                                LineTension: 0.1,
                                borderColor: '#f56',
                                backgroundColor: '#f56',
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
                                data: props.cpu.cpu_percent,
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

export default Cpu;