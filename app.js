const StringDecoder = require('string_decoder').StringDecoder
const express = require('express')
const WebSocketServer = require('ws').Server
const bodyParser = require('body-parser')
const SerialPort = require('serialport')
const routes = require('./routes')
const websocket = require('./websocket') 
const Logger = require('./functions/logger')
const cnsl = require('./console')
const app = express()
const wss = new WebSocketServer({ port: 40510 })




app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let selectedPort = '';
let port;

app.get('/devices', routes.listDevices )

app.post('/devices/select', routes.selectDevice)

wss.on('connection', websocket.openConnection)

app.listen(3000, () => {
    let selectedPortAsArg = cnsl.handleArguments()
    Logger.applicationStarted(3000)        
    if (selectedPortAsArg) {
        Logger.applicationStarted(3000)            
        Logger.log("Attempting to open connection to: " + selectedPortAsArg)
        cnsl.selectSerialPort(selectedPortAsArg)
    }
})

