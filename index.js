// FOR SERVING INDEX.HTML @ localhost:8080 --> But not working :(
var app = require('express')();
var http = require('http').createServer(app);

// respond to web GET requests with the index.html page:
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

var serialport = require("serialport"),		// include the serialport library
	SerialPort  = serialport.SerialPort,	   // make a local instance of serial
	express = require('express'),				   // make an instance of express
	url = 'http://localhost:8080';            // URL to open in the browser

// third word of the command line is serial port name:
var portName = process.argv[2];				  
console.log("opening serial port: " + portName);

// open the serial port:
var serialPort = new SerialPort(portName, { 
	parser: serialport.parsers.readline("\r\n") 
});

var io = require('socket.io').listen(8080);
io.sockets.on('connection', function (socket) {
    socket.on('button', function (msg) {
    	// buf = new Buffer(msg.length)
    	// data = JSON.parse(msg);
        // var buf = new Buffer([1,2,3,data.a, data.b, data.c, data.d])
        // msg_out = data.a+","+data.b+","+data.c+","+data.d+"\n";
        console.log("Sending... " + msg);
        // var buf = new Buffer([257,2,3,4,5]);
        serialPort.write(msg);
    });
    serialPort.on('data', function (data) {
	console.log("Heard: " + data)
	socket.emit('responseEvent',data);
	});
});		

// var WebSocket = require('ws')
// ws = new WebSocket('ws://localhost:8080');
// ws.on('open',function(socket) {
// 	socket.on('message', function(message) {
// 		console.log('received: %s', message);	
// 	});
// });




