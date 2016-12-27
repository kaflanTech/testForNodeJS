var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var article = mongoose.Schema({
   id    : String,
   title :  String,
   extract: String,
   content: String
});
module.exports = mongoose.model('Article', article);