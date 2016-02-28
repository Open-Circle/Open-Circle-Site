var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'ejs');

// Serve Static Files
app.use("/styles", express.static('styles'));
app.use("/scripts", express.static('scripts'));
app.use("/img", express.static('img'));

app.get('/', function(req, res) {
    res.render('pages/index');
});

// TODO: Make it send 404 HTTP code instead of that gross error
app.get('/*', function (req, res) {
  console.log(req.url);
  var pageName = req.url.replace('/', '');
  res.render(__dirname + "/views/" + pageName);
});

var server = http.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s%s', host, port);
});
