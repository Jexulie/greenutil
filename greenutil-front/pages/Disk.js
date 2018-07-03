import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const Disk = props => {
    return (
        <div className="disk container">
            <div className="header center">
                <h2>Disk-Monitor</h2>
                <div className="info">
                    <p>Read Count: {props.disk.read_count}</p>
                    <p>Write Count: {props.disk.write_count}</p>
                    <p>Free Storage: {props.disk.free_storage} Gb</p>
                    <p>Total Storage: {props.disk.total_storage} Gb</p>
                    <p>Used Storage: {props.disk.used_storage} Gb</p>
                </div>
            </div>
            <div className="charts">
                <div className="read">
                    <Bar 
                        data={
                            {
                                labels: props.time,
                                datasets:[
                                    {
                                        label: 'Disk Read Mbps',
                                        fill:false,
                                        LineTension: 0.1,
                                        borderColor: '#420dab',
                                        backgroundColor: '#420dab',
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
                                        data: props.disk.read_Mb,
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
                <div className="write">
                    <Bar 
                        data={
                            {
                                labels: props.time,
                                datasets:[
                                    {
                                        label: 'Disk Write Mbps',
                                        fill:false,
                                        LineTension: 0.1,
                                        borderColor: '#ffb818',
                                        backgroundColor: '#ffb818',
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
                                        data: props.disk.write_Mb,
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
                <div className="percent">
                    <Bar 
                        data={
                            {
                                labels: props.time,
                                datasets:[
                                    {
                                        label: 'Disk Usage Percent',
                                        fill:false,
                                        LineTension: 0.1,
                                        borderColor: '#abc111',
                                        backgroundColor: '#abc111',
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
                                        data: props.disk.used_percent,
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

export default Disk;