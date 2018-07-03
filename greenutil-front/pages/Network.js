import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const Network = props => {
    return (
        <div className="network container">
            <div className="header center">
                <h2>Network-Monitor</h2>
            </div>
            <div className="charts">
                <div className="sent">
                    <Line 
                        data={
                            {
                                labels: props.time,
                                datasets:[
                                    {
                                        label: 'Network Sent Mbps',
                                        fill:false,
                                        LineTension: 0.1,
                                        borderColor: '#069',
                                        backgroundColor: '#069',
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
                                        data: props.network.sent,
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
                <div className="recieved">
                    <Bar 
                        data={
                            {
                                labels: props.time,
                                datasets:[
                                    {
                                        label: 'Network Recieved Mbps',
                                        fill:false,
                                        LineTension: 0.1,
                                        borderColor: '#af8',
                                        backgroundColor: '#af8',
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
                                        data: props.network.recieved,
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
        </div>
    )
}

export default Network;