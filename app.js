var express = require ('express');
var app = express(); 
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {	
	res.sendFile(__dirname + '/index.html');

});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('choice', function(what){
		console.log('chosen: ' + what);
	});
	socket.on('mail', function(mail){	
		console.log('mail: ' + mail);
	});
});

http.listen(3000, function () {
	console.log('listening on *: 3000');
});






