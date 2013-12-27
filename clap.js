var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
app.get('/clap.mp3', function (req, res) {
  res.sendfile(__dirname + '/clap.mp3');
});

io.sockets.on('connection', function (socket) {
  socket.on('clap', function (data) {
	socket.emit('clap');
  });
});
