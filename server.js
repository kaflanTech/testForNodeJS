const express = require('express');
const port = process.env.PORT || 8088;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const mongoose = require('mongoose');
let configDB = require('./config/database');
const Article = require('./config/models/article.model');

mongoose.connect(configDB.url, (err) => {
  if (err) console.log(err);  
    console.log('Success');
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));
app.use(session({ secret: 'secretcat' }));
//routes
require('./config/routes.js')(app);
//listen server 
app.listen(port);
console.log('The magic happens on port ' + port);