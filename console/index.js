const commandLineArgs = require('command-line-args')
const commandLineUsage = require('command-line-usage')
const SerialPort = require('serialport')
const Logger = require('../functions/logger')

const helpSections = [
    {
        header: 'Queenslab Node Bridge',
        content: 'For use with the Arduino based Mixmeister 3000s'
      },
      {
        header: 'Options',
        optionList: [
          {
            name: 'list',
            description: 'Lists all available serialports'
          },
          {
            name: 'serialport',
            typeLabel: '{underline string}',
            description: 'Select a serialport at startup using its comName (hint: use --list to see available serialports)'
          },
          {
            name: 'help',
            description: 'Print this usage guide.'
          }
        ]
      }
]

const optionDefinitions = [
    { name: 'list', alias: 'l', type: Boolean},
    { name: 'serialport', alias: 's', type: String},
    { name: 'help', alias: 'h', type: Boolean}
]

const options = commandLineArgs(optionDefinitions)
const usageDoc = commandLineUsage(helpSections)

function hasArguments () {
    if (options.list || options.serialport) {
        return true
    } else {
        return false
    }
}

function handleArguments () {
    if (options.help) {
        Logger.printUsageGuide(usageDoc)
        process.exit(0)
    } else if (options.serialport) {
        Logger.log("Found argument --serialport: " + options.serialport)
        return options.serialport
    } else if (options.list) {
        listSerialPorts()
    }
}

function listSerialPorts () {
    SerialPort.list()
        .then((response) => {               
            response.forEach((port) => {
                Logger.log("Listing available ports")
                Logger.log("Port: " + port.comName)
                Logger.logObject(port)
            });
            Logger.log("You can select a port by entering its comName with the argument --serialport (-s)")
            process.exit(0)                                
        })
        .catch((error) => {
            Logger.error("Could not list ports: " + error)
            process.exit(1)            
        })
}

function selectSerialPort (comName) {
    var ports = []
    SerialPort.list()
        .then((response) => {
            ports = response
            selectedPort = ports.find( port => port.comName === comName )
            if (selectedPort) {
                port = new SerialPort(selectedPort.comName, { baudRate: 19200, autoOpen: false, parser: SerialPort.parsers.raw }, (error) => {
                    
                })
                Logger.log("Started port listener. Websocket is now ready to connect on port 40510")
            } else {
                Logger.error("Requested port is no longer active")
            }
            
        })
        .catch((error) => {
            Logger.error("Requested port is no longer active: " + error )    
        })
}


module.exports.options = options
module.exports.handleArguments = handleArguments
module.exports.selectSerialPort = selectSerialPort