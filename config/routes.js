var mongoose = require('mongoose');
var Articles = mongoose.model('Articles');
var controller = require('./controllers/articles.controller');

module.exports = function (app) {

  app.get('/articles', function (req, res) {
    controller.getAllArticles(req, res);
  });

  app.get('/articles/:id', function (req, res) {
    controller.getArticleId(req, res);
  });


  app.post('/articles/new', function (req, res) {
    controller.create(req, res);
  });

  app.put('/articles/:id', function (req, res) {
    controller.update(req,res);
  });
  app.delete('/articles/:id', function (req, res) {
    controller.remove(req, res);
  });

};


function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
