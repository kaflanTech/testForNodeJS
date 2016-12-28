const mongoose = require('mongoose');

const article = mongoose.Schema({
	id: Number,
	title: String,
	extract: String,
	content: String
});
module.exports = mongoose.model('Articles', article);
