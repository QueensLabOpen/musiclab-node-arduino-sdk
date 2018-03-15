function applicationStarted ( port = 3000 ) {
    console.log('\x1b[32m%s\x1b[0m'," _____                           _       _     ")
    console.log('\x1b[32m%s\x1b[0m',"|  _  |                         | |     | |    ")
    console.log('\x1b[32m%s\x1b[0m',"| | | |_   _  ___  ___ _ __  ___| | __ _| |__  ")
    console.log('\x1b[32m%s\x1b[0m',"| | | | | | |/ _ \\/ _ \\ '_ \\/ __| |/ _\\`| '_ \\ ")
    console.log('\x1b[32m%s\x1b[0m',"\\ \\/' / |_| |  __/  __/ | | \\__ \\ | (_| | |_) |")
    console.log('\x1b[32m%s\x1b[0m'," \\_/\\_\\__,_|\\___|\\___|_| |_|___/_|\\__,_|_.___/ ")
    console.log('\x1b[32m%s\x1b[0m',"                                               ")    
    console.log('\x1b[35m%s\x1b[0m',"\tMixmeister 3000 Node Bridge")
    console.log('\x1b[32m%s\x1b[0m',"                                               ")    
    console.log('\x1b[32m%s\x1b[0m',"                                               ")        
    console.log('\x1b[36m',' >> App listening on port ' + port)
    reset()
}

function log ( message ) {
    console.log('\x1b[36m', ' >> ' + message)
    reset()
}

function error ( message ) {
    console.log('\x1b[31m', ' >> ERROR: ' + message)
    reset()    
}

function logObject ( object ) {
    Object.keys(object).map(e => 
        console.log("\x1b[35m",`\t- ${e}:  ${object[e]}`));
    reset()
}

function printUsageGuide ( guide ) {
    console.log("\x1b[35m", guide)
    reset()
}

function reset () {
    console.log("\x1b[0m", "")
}

module.exports.applicationStarted = applicationStarted
module.exports.log = log
module.exports.error = error
module.exports.logObject = logObject
module.exports.printUsageGuide = printUsageGuide