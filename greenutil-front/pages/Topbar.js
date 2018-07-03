import React from 'react';

const Topbar = props => {
    let net = props.curState === 'network' ? 'green darken-4': ""
    let cpu = props.curState === 'cpu' ? 'green darken-4': ""
    let disk = props.curState === 'disk' ? 'green darken-4': ""
    let memo = props.curState === 'memory' ? 'green darken-4': ""
    return (
        <nav>
            <div className="nav-wrapper green darken-2">
                <a className="brand-logo right"><img src="static/greenutil.png" alt="logo" width="55px"/></a>
                <ul>
                    <li className={net} ><a onClick={() => props.setState('network')}>Network</a></li>
                    <li className={cpu} ><a onClick={() => props.setState('cpu')}>Cpu</a></li>
                    <li className={disk} ><a onClick={() => props.setState('disk')}>Disk</a></li>
                    <li className={memo} ><a onClick={() => props.setState('memory')}>Memory</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Topbar;
    

