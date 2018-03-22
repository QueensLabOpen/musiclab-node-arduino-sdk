# Mixmeister Node SDK

Simple implementation of transmitting data from a serial port to a websocket client

### Prerequisites

Start with installing dependencies

```
npm install
```

### Installing

Start the application

```
node app.js
```

Available serial ports on the machine running the code can be listed at

```
node app.js --list
```

To select the port you want to use 

```
node app.js --serialport comName
```

To list available commands

```
node app.js --help 
```

Connect to the websocket on port 40510

## Known bugs
- Reopening a websocket client without restarting the application causes a crash at first serialport input

## Built With

* [Express](https://expressjs.com/) - The web framework used
* [ws](https://github.com/websockets/ws) - Websocket
* [Node Serialport](https://node-serialport.github.io/node-serialport/) - Used to listen to a serial port

## License

This project is licensed under the MIT License