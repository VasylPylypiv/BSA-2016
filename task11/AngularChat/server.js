var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var server = app.listen(3060);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/bower_components', express.static('bower_components'));

const staticPath = path.normalize(__dirname + '/public');
app.use(express.static(staticPath));


const routes = require('./routes/routes')(app);



