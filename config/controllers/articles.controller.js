const mongoose = require('mongoose');
const Articles = mongoose.model('Articles');
function controller(req, res) {
  let i;

  Articles.find({}, (err, articles) => {
    i = articles.reduce((final, current) => Math.max(final, current.id), 0);
  });
  function Response(err, data, res) {
    if (err) throw err;
    res.send({ status: "ok", article: data });
  }

  function create(req, res) {
    if (typeof i === "undefined") {
      i = 1;
    }
    new Articles({
      id: ++i,
      title: req.body.title,
      extract: req.body.extract,
      content: req.body.content
    }).save((err, articles) => { Response(err, articles, res) });
  };
  function update(req, res) {
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
  function remove(req, res) {
    Articles.remove({ id: req.params.id }, (err, articles) => { Response(err, articles, res) });
  };
  function getAllArticles(req, res) {
    Articles.find({}, (err, articles) => {
      Response(err, articles, res);
    });
  };
  function getArticleId(req, res) {
    Articles.find({ id: req.params.id }, (err, articles) => { Response(err, articles, res) });
  };
  return {
    create,
    update,
    remove,
    getAllArticles,
    getArticleId
  };
};
module.exports = controller;
