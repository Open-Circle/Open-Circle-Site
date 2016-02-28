var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



var server = http.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s%s', host, port);
});
