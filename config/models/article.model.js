var mongoose = require('mongoose');
var configDB = require('../database');
var article = mongoose.Schema({
  id: Number,
  title: String,
  extract: String,
  content: String
});
mongoose.model('Articles', article);
mongoose.connect(configDB.url, function (err) {
	// body...
	 if(err){
	 	console.log(err);
	 } else {
	 	console.log('Success');
	 }
});