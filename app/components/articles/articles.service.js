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
        return this.articles = res.data;
      }).catch(err => {
        console.log('Error:', err);
      });
  }
  getArticle(id) {
    return this.articles.filter(x => x.id == id).pop();
  }
  addArticle(newArticle) {
    return this.$http.post(this.getPath() + '/articles/new', newArticle)
      .then(res => {
        this.articles.push(res.data);
        return this.articles = angular.copy(this.articles);
      }).catch(err => {
        console.log('Error:', err);
      })
  }
  updateArticle(updatedArticle) {
    return this.$http.put(this.getPath() + '/articles/' + updatedArticle.id, updatedArticle)
      .then(success => {
        this.articles = this.articles.map(x => {
          if (x.id === updatedArticle.id) return updatedArticle;
          return x;
        });
      }).catch(err => {
        console.log('Error:', err);
      })
  }
  deleteArticle(articleToDelete) {
    return this.$http.delete(this.getPath() + '/articles/' + articleToDelete.id)
      .then(success => {
        this.articles = this.articles.filter(x => x.id !== articleToDelete.id);
      }).catch(err => {
        console.log('Error:', err);
      })
  }
  getPath() {
    return this.$window.location.origin;
  }
}
