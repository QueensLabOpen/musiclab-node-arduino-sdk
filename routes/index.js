const SerialPort = require('serialport')
const Logger = require('../functions/logger')


function listDevices (req, res) {
    var ports = []
    SerialPort.list()
        .then((response) => {
            ports = response
            res.json({response})
        })
        .catch((error) => {
            res.status(404).send("Couldnt list ports")
            Logger.error("Could not list ports: " + error)
        })
}

function selectDevice (req, res) {
    if (req.body.comName) {
        var ports = []
        SerialPort.list()
            .then((response) => {
                ports = response
                selectedPort = ports.find( port => port.comName === req.body.comName )
                if (selectedPort) {
                    port = new SerialPort(selectedPort.comName, { baudRate: 19200, autoOpen: false }, (error) => {
                        
                    })
                    res.send("Started port listener. Websocket is now ready to connect on port 40510")
                    Logger.log("Started port listener. Websocket is now ready to connect on port 40510")
                } else {
                    res.status(400).send("Requested port is no longer active")
                    Logger.error("Requested port is no longer active")
                }
                
            })
            .catch((error) => {
                Logger.error("Requested port is no longer active")                
                res.send(error)
            })
    } else {
        res.status(400).send("Missing property in request: comName")
        Logger.error("Missing property in request: comName")
    }
}

module.exports.listDevices = listDevices
module.exports.selectDevice = selectDevice