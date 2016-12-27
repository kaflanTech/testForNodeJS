require('./config/models/article.model');



var express = require('express');
var app = express();
var port = process.env.PORT || 8088;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var mongoose = require('mongoose');
var morgan = require('morgan');

var flash = require('connect-flash');



app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));

app.use(session({ secret: 'secretcat' }));


require('./config/routes.js')(app);

app.listen(port);
console.log('The magic happens on port ' + port);