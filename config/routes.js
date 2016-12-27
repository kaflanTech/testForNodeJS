var mongoose = require('mongoose');
var Articles = mongoose.model('Articles');
var i;
Articles.find({}, function (err, articles) {
    i = articles.map(x => x.id).sort((a, b) => a - b).pop();
    console.log(i);
});
module.exports = function (app) {

  app.get('/articles', function (req, res) {
    Articles.find({}, function (err, articles) {
      if (err) {
        res.send(err);
      }
      //console.log(articles);
      res.send(articles);
    });
  });

  app.get('/articles/:id', function (req, res) {
    Articles.find({ id: req.params.id }, function (err, article) {
      if (err) {
        res.send(err);
      }
      res.send(article);
    })

  });


  app.post('/articles/new', function (req, res) {
    if (typeof i === "undefined"){
      i = 1;
    }
    new Articles({
      id: ++i,
      title: req.body.title,
      extract: req.body.extract,
      content: req.body.content
    }).save(
      function (err, article) {
        if (err) {
          res.send(err);
        }
        res.send(article);
      });
  });

  app.put('/articles/:id', function (req, res) {
    console.log(req.params.id, req.body);
    Articles.update({ id: req.params.id },
      {
        $set: {
          title: req.body.title,
          extract: req.body.extract,
          content: req.body.content
        }
      },
      function (err, article) {
        if (err) {
          res.send(err);
        }
        res.send({ article: article, ok: 'ok' });
      })
  });
  app.delete('/articles/:id', function (req, res) {
    Articles.findByIdAndRemove(req.params.id, function (err, articles) {
      res.send('ok, delete work');
    });
  });


  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

};

function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
