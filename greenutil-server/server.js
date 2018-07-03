var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()

var Getdata = require('./getdata');
var hodor = new Getdata();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/n', (req, res) => {
    hodor.networkReading()
        .then(stream => {
            res.json({success: true, data: stream});
        })
    
})
app.get('/c', (req, res) => {
    hodor.cpuReading()
        .then(stream => {
            res.json({success: true, data: stream});
        })
    
})
app.get('/d', (req, res) => {
    hodor.diskReading()
        .then(stream => {
            res.json({success: true, data: stream});
        })
    
})
app.get('/m', (req, res) => {
    hodor.memoryReading()
        .then(stream => {
            res.json({success: true, data: stream});
        })
    
})

app.listen(3001)