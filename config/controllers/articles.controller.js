const mongoose = require('mongoose');
const Articles = mongoose.model('Articles');
let i;

Articles.find({}, (err, articles) => {
  i = articles.map(x => x.id).sort((a, b) => a - b).pop();
});
function Response(err, data, res) {
  if (err) throw err;
  res.send({ status: "ok", article: data });
}

exports.create = (req, res) => {
  if (typeof i === "undefined") {
    i = 1;
  }
  new Articles({
    id: ++i,
    title: req.body.title,
    extract: req.body.extract,
    content: req.body.content
  }).save( (err, articles) => { Response(err, articles, res) });
};

exports.update = (req, res) => {
  Articles.update({ id: req.params.id },
    {
      $set: {
        title: req.body.title,
        extract: req.body.extract,
        content: req.body.content
      }
    },
    (err, articles) => { Response(err, articles, res) });
};
exports.remove = (req, res) => {
  Articles.remove({ id: req.params.id },  (err, articles) => { Response(err, articles, res) });
};

exports.getAllArticles = (req, res) => {

  Articles.find({}, (err, articles) => {
    Response(err, articles, res);
  });
};

exports.getArticleId = (req, res) => {
  Articles.find({ id: req.params.id }, (err, articles) => { Response(err, articles, res) });
};