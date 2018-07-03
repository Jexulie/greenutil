// py.stdin.write(JSON.stringify(data))
function Getdata(){

}

Getdata.prototype.networkReading = function(){
    return new Promise((resolve, reject) => {
        var spawn = require('child_process').spawn;
        var py = spawn('python', ['network_bandwidth.py']);
        var fs = require('fs');
        var dataString = '';
        py.stdout.on('data', data => {
            dataString += `${data.toString()}`;
        });

        py.stdout.on('end', () => {
            // fs.appendFileSync('data/network_reading.txt', dataString, 'utf-8');
            resolve(dataString);
            reject('failed');
        });
        py.stdin.end();
    });
}

Getdata.prototype.cpuReading = function(){
    return new Promise((resolve, reject) => {
        var spawn = require('child_process').spawn;
        var py = spawn('python', ['cpu_usage.py']);
        var fs = require('fs');
        var dataString = '';
        py.stdout.on('data', data => {
            dataString += `${data.toString()}`;
        });

        py.stdout.on('end', () => {
            // fs.appendFileSync('data/network_reading.txt', dataString, 'utf-8');
            resolve(dataString);
            reject('failed');
        });
        py.stdin.end();
    });
}

Getdata.prototype.diskReading = function(){
    return new Promise((resolve, reject) => {
        var spawn = require('child_process').spawn;
        var py = spawn('python', ['disk_usage.py']);
        var fs = require('fs');
        var dataString = '';
        py.stdout.on('data', data => {
            dataString += `${data.toString()}`;
        });

        py.stdout.on('end', () => {
            // fs.appendFileSync('data/network_reading.txt', dataString, 'utf-8');
            resolve(dataString);
            reject('failed');
        });
        py.stdin.end();
    });
}

Getdata.prototype.memoryReading = function(){
    return new Promise((resolve, reject) => {
        var spawn = require('child_process').spawn;
        var py = spawn('python', ['memory_usage.py']);
        var fs = require('fs');
        var dataString = '';
        py.stdout.on('data', data => {
            dataString += `${data.toString()}`;
        });

        py.stdout.on('end', () => {
            // fs.appendFileSync('data/network_reading.txt', dataString, 'utf-8');
            resolve(dataString);
            reject('failed');
        });
        py.stdin.end();
    });
}

module.exports = Getdata

