var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var mongoose = require('mongoose');
var morgan = require('morgan');
var configDB = require('./config/database.js');
var flash = require('connect-flash');

mongoose.connect(configDB.url);


require('./config/passport')(passport);

app.configure(function () {
  app.use(express.logger('dev'));
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(__dirname + '/app'));
  // required for passport
  app.use(session({ secret: 'secretcat' }));
  app.use(passport.initialize());
  app.use(passport.session());
});

require('./app/routes.js')(app, passport);

app.listen(port);
console.log('The magic happens on port ' + port);