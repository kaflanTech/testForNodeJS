export class ArticlesService {
  constructor($http, $window) {
    'ngInject';
    this.$http = $http;
    this.$window = $window;
    this.articles = [];
  }
  getArticles() {
    return this.$http.get(this.getPath() + '/articles')
      .then(res => {
        this.articles = angular.copy(res.data.filter(x => x.title));
        return this.articles;
      }).catch(err => {
        console.log('Error:', err);
      });
  }
  getArticle(id) {
    this.articles = angular.copy(this.articles);
    return this.articles.filter(x => x.id == id).pop();
  }
  addArticle(newArticle) {
    this.$http.post(this.getPath() + '/articles/new', newArticle)
      .then(res => {
        this.articles.push(res.data);
        this.articles = angular.copy(this.articles);
      }).catch(err => {
        console.log('Error:', err);
      })
  }
  updateArticle(updatedArticle) {
    this.$http.put(this.getPath() + '/articles/' + updatedArticle.id, updatedArticle)
      .then(success => {
        this.articles = this.articles.map(x => {
          if (x.id === updatedArticle.id) return updatedArticle;
          return x;
        });
        this.articles = angular.copy(this.articles);
      }).catch(err => {
        console.log('Error:', err);
      })
  }
  deleteArticle(articleToDelete) {
    this.$http.delete(this.getPath() + '/articles/' + articleToDelete.id)
      .then(success => {
        this.articles = this.articles.filter(x => x.id !== articleToDelete.id);
        this.articles = angular.copy(this.articles);
      }).catch(err => {
        console.log('Error:', err);
      })
  }
  getPath() {
    return this.$window.location.origin;
  }
}
