import React, { Component } from 'react';
import axios from 'axios';

import Head from './Head';
import Topbar from './Topbar';
import Network from './Network';
import Disk from './Disk';
import Cpu from './Cpu';
import Memory from './Memory';

 
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: [],
            network: {
                sent: [],
                recieved: []
            },
            cpu: {
                cpu_count: 0,
                cpu_freq: 0,
                cpu_percent: []
            },
            disk: {
                read_count: 0,
                write_count: 0,
                read_Mb: [],
                write_Mb: [],
                total_storage: 0,
                free_storage: 0,
                used_storage: 0,
                used_percent: []
            },
            memory: {
                total: 0,
                available: 0,
                free: 0,
                used: 0,
                used_percent: []
            },
            currentState: 'network'
        }
        this.setCurState = this.setCurState.bind(this)
    }

    
    componentDidMount(){
        this.iter = setInterval(() => {
            this.gettime()
            switch(this.state.currentState){
                case 'network':
                    this.net()
                    break;
                case 'cpu':
                    this.cpu()
                    break;
                case 'disk':
                    this.disk()
                    break;
                case 'memory':
                    this.memory()
                    break;
            }
        },1050)
    }

    componentWillUnmount(){
        clearInterval(this.iter);
    }


    gettime(){
        let time = new Date().toLocaleTimeString()
        if(this.state.time.length >= 30){
            this.setState({
                time: [...this.state.time.slice(1,), time]
            })
        }else{
            this.setState({
                time: [...this.state.time, time]
            })
        }
    }

    net(){
        axios.get('http://localhost:3001/n').then(n => {
            let m = n.data.data
            let sent;
            let recieved;
            sent = /sent:\s(\d\.\d\d\d)\sMbps/gi.exec(m)
            recieved = /recieved:\s(.*)\sMbps/gi.exec(m)
            sent = parseFloat(sent[1])
            recieved = parseFloat(recieved[1])
            if(this.state.network.recieved.length >= 30){
                this.setState({
                    network: { 
                        recieved : [...this.state.network.recieved.slice(1,), recieved], 
                        sent : [...this.state.network.sent.slice(1,), sent] 
                    }
                })
            }else{
                this.setState({
                    network: { 
                        recieved : [...this.state.network.recieved, recieved], 
                        sent : [...this.state.network.sent, sent] 
                    }
                })
            }
            
        }).catch(e => console.error(e))
    }
    cpu(){
        axios.get('http://localhost:3001/c').then(n => {
            let m = n.data.data
            let cpu_count = /cpu_count:\s(\d+),/gi.exec(m)
            let cpu_freq = /cpu_freq:\s(\d+.\d+)/gi.exec(m)
            let cpu_percent = /cpu_percent:\s(\d+.\d+),/gi.exec(m)
            cpu_count = parseInt(cpu_count[1])
            cpu_freq = parseFloat(cpu_freq[1])
            cpu_percent = parseInt(cpu_percent[1])
            if(this.state.cpu.cpu_percent.length >= 30){
                this.setState({
                    cpu: {
                        cpu_count: cpu_count,
                        cpu_freq: cpu_freq,
                        cpu_percent: [...this.state.cpu.cpu_percent.slice(1,),cpu_percent]
                    }
                })
            }else{
                this.setState({
                    cpu: {
                        cpu_count: cpu_count,
                        cpu_freq: cpu_freq,
                        cpu_percent: [...this.state.cpu.cpu_percent,cpu_percent]
                    }
                })
            }
        })
    }
    disk(){
        axios.get('http://localhost:3001/d').then(n => {
            let m = n.data.data
            let rc = /read_count_per_sec:\s(\d+),/gi.exec(m)
            let wc = /write_count_per_sec:\s(\d+),/gi.exec(m)
            let rmb = /read_Mbytes_per_sec:\s(\d+.\d+),/gi.exec(m)
            let wmb = /write_Mbytes_per_sec:\s(\d+.\d+),/gi.exec(m)
            let total = /total:\s(\d+.\d+),/gi.exec(m)
            let free = /free:\s(\d+.\d+),/gi.exec(m)
            let used = /used:\s(\d+.\d+),/gi.exec(m)
            let percent = /percent:\s(\d+)/gi.exec(m)
            rc = parseInt(rc[1])
            wc = parseInt(wc[1])
            rmb = parseFloat(rmb[1])
            wmb = parseFloat(wmb[1])
            total = parseFloat(total[1])
            free = parseFloat(free[1])
            used = parseFloat(used[1])
            percent = parseInt(percent[1])
            if(this.state.disk.used_percent.length >= 30){
                this.setState({
                    disk : {
                        read_count: rc,
                        write_count: wc,
                        read_Mb: [...this.state.disk.read_Mb.slice(1,), rmb],
                        write_Mb: [...this.state.disk.write_Mb.slice(1,), wmb],
                        total_storage: total,
                        free_storage: free,
                        used_storage: used,
                        used_percent: [...this.state.disk.used_percent.slice(1,), percent]
                    }
                })
            }else{
                this.setState({
                    disk : {
                        read_count: rc,
                        write_count: wc,
                        read_Mb: [...this.state.disk.read_Mb, rmb],
                        write_Mb: [...this.state.disk.write_Mb, wmb],
                        total_storage: total,
                        free_storage: free,
                        used_storage: used,
                        used_percent: [...this.state.disk.used_percent, percent]
                    }
                })
            }
        })
    }
    memory(){
        axios.get('http://localhost:3001/m').then(n => {
            let m = n.data.data
            let total = /total:\s(\d+.\d+),/gi.exec(m)
            let available = /available:\s(\d+.\d+),/gi.exec(m)
            let used =  /used:\s(\d+.\d+),/gi.exec(m)
            let free =  /free:\s(\d+.\d+),/gi.exec(m)
            let used_percent = /used_in_percent:\s(\d+)/gi.exec(m)
            total = parseFloat(total[1])
            available = parseFloat(available[1])
            used =  parseFloat(used[1])
            free =  parseFloat(free[1])
            used_percent = parseInt(used_percent[1])
            if(this.state.memory.used_percent.length >= 30){
                this.setState({
                    memory: {
                        total : total,
                        available : available,
                        used : used,
                        free : free,
                        used_percent : [...this.state.memory.used_percent.slice(1,), used_percent]
                    }
                })  
            }else{
                this.setState({
                    memory: {
                        total : total,
                        available : available,
                        used : used,
                        free : free,
                        used_percent : [...this.state.memory.used_percent, used_percent]
                    }
                })  
            }        
        })
    }


    setCurState(state){
        this.setState({
            currentState: state,
            time: []
        })
    }

    render(){
        let content;
        switch(this.state.currentState){
            case 'network':
                content = (<Network network={this.state.network} time={this.state.time}/>)
                break;
            case 'cpu':
                content = (<Cpu cpu={this.state.cpu} time={this.state.time}/>)
                break;
            case 'disk':
                content = (<Disk disk={this.state.disk} time={this.state.time}/>)
                break;
            case 'memory':
                content = (<Memory memory={this.state.memory} time={this.state.time}/>)
                break;
        }
        return (
            <div className="App">
                <Head/>
                <Topbar setState={this.setCurState} curState={this.state.currentState}/>
                <main className="Main">
                    {content}
                </main>
                <style jsx>{`
                    .App {
                        display: flex;
                        flex-direction: column;
                    }
                    .Main{
                        display: flex;
                        flex-direction: column;
                    }
                    .info{
                        display: flex;
                        flex-direction: row;
                    }
                `}</style>
            </div>
        )
    }
}

export default App;