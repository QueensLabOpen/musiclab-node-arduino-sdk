function applicationStarted ( port = 3000 ) {
    console.log('\x1b[32m%s\x1b[0m'," _____                           _       _     ");
    console.log('\x1b[32m%s\x1b[0m',"|  _  |                         | |     | |    ");
    console.log('\x1b[32m%s\x1b[0m',"| | | |_   _  ___  ___ _ __  ___| | __ _| |__  ");
    console.log('\x1b[32m%s\x1b[0m',"| | | | | | |/ _ \\/ _ \\ '_ \\/ __| |/ _\\`| '_ \\ ");
    console.log('\x1b[32m%s\x1b[0m',"\\ \\/' / |_| |  __/  __/ | | \\__ \\ | (_| | |_) |");
    console.log('\x1b[32m%s\x1b[0m'," \\_/\\_\\__,_|\\___|\\___|_| |_|___/_|\\__,_|_.___/ ");
    console.log('\x1b[32m%s\x1b[0m',"                                               ");
    console.log('\x1b[32m%s\x1b[0m',"                                               ");
    console.log('\x1b[36m',' >> App listening on port ' + port)
}

function log ( message ) {
    console.log('\x1b[36m', ' >> ' + message)
}

function error ( message ) {
    console.log('\x1b[31m', ' >> ERROR: ' + message)
}

module.exports.applicationStarted = applicationStarted
module.exports.log = log
module.exports.error = error