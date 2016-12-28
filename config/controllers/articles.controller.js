var mongoose = require('mongoose');
var Articles = mongoose.model('Articles');
var i;

Articles.find({}, function (err, articles) {
  i = articles.map(x => x.id).sort((a, b) => a - b).pop();
});
function Response(err, data, res) {
  if (err) throw err;
  res.send({ status: "ok", article: data });
}

exports.create = function (req, res) {
  if (typeof i === "undefined") {
    i = 1;
  }
  new Articles({
    id: ++i,
    title: req.body.title,
    extract: req.body.extract,
    content: req.body.content
  }).save(function(err, articles){Response(err, articles, res)});
};

exports.update = function (req, res) {
  Articles.update({ id: req.params.id },
    {
      $set: {
        title: req.body.title,
        extract: req.body.extract,
        content: req.body.content
      }
    },
    function(err, articles){Response(err, articles, res)});
};
exports.remove = function(req, res){
  Articles.remove({ id: req.params.id }, function(err, articles){Response(err, articles, res)});
};

exports.getAllArticles = function (req, res) {
  
  Articles.find({}, function(err, articles){
    Response(err, articles, res);
  } );
};

exports.getArticleId = function (req, res) {
  Articles.find({ id: req.params.id }, function(err, articles){Response(err, articles, res)});
};