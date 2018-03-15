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
/devices  #GET
```

To select the port you want to use 

```
/devices/select #POST { comName: 'your-port' }
```

Connect to the websocket on port 40510

## Built With

* [Express](https://expressjs.com/) - The web framework used
* [ws](https://github.com/websockets/ws) - Dependency Management
* [Node Serialport](https://node-serialport.github.io/node-serialport/) - Used to generate RSS Feeds

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details