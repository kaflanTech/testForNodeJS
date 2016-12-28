const controller = require('./controllers/articles.controller');

module.exports = function (app) {

  app.get('/articles', controller.getAllArticles);

  app.get('/articles/:id', controller.getArticleId);

  app.post('/articles/new', controller.create);

  app.put('/articles/:id', controller.update);

  app.delete('/articles/:id', controller.remove);
};

