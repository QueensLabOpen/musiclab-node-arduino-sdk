const Logger = require('../functions/logger')
var createInterface = require('readline').createInterface;

function openConnection (ws) {

    if (typeof port !== 'undefined' && port) {
        if (!port.isOpen) {
            port.open((error) => {
                if (error) {
                    ws.send("Error opening port")
                    Logger.error("Error opening port: " + error)
                } else {
                    ws.send("Serial port opened")
                    Logger.log("Serial port opened and websocket connection ready to transmit")
                    let buffer = ''                
                    
                /*     port.on('data', (data) => {
                        /* buffer += data.toString()
                        if (buffer.slice(-1) === ';') {
                            ws.send(buffer)
                            buffer = ''
                        } */
                    // }) */
                }

                var lineReader = createInterface({
                    input: port
                })
                lineReader.on('line', (line) => {
                    ws.send(line)
                }) 
            })
        } else {
            Logger.log("Using existing serialport. Websocket connection ready to transmit")

            let buffer = ''            
            port.on('data', (data) => {
                buffer += data.toString()
                Logger.log(buffer.toString())
                if (buffer.slice(-1) === ';') {
                    ws.send(buffer)
                    buffer = ''
                }
            })
        }
        ws.on('message', (message) => {
            // One way street, do nothing
        })
        ws.on('close', () => {
            Logger.log("Websocket connection closed")
        })
    } else {
        ws.send("No serial port opened")
        Logger.error("Can not open websocket connection: No serial port opened. Did you select one using the endpoint /devices/select ?")
    }
}

module.exports.openConnection = openConnection