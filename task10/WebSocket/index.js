var express = require('express');
var bodyParser = require('body-parser');

var socketio = require('socket.io');

var app = express();
var server = app.listen(8080);
console.log('Server is working on 8080 port');

var io = socketio.listen(server);

var staticDir = __dirname + '/public/';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var messages = [];

app.get('/', function(req, res){
    res.sendFile(staticDir + 'index.html');
});

app.get('/messages', function(req,res){
   res.json(messages);
});

app.post('/messages', function(req, res){
    var message = req.body;
    messages.push(message);
    res.json(message);
});

io.on('connection', function(socket){

    console.log('client connected');
    socket.on('disconnected', function(msg){
        console.log('client disconnected');
    });

    socket.on('chat message', function(msg){
        messages.push(msg);
        io.emit('chat message', msg);
    });

    socket.emit('chat history', messages);
});