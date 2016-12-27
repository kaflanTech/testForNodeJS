export class ArticlesService {
  constructor() {
    this.articles = [
      {id: 1, title: 'Johan von Uberwald', extract: 'Do you know what is your cat actually doing while you\'re sleeping...', content: 'TL;DR;'},
      {id: 2, title: 'Grumpy Grump', extract: 'Everything you need to know about Dwarfs from our experts...', content: 'TL;DR Content Go;'},
      {id: 3, title: 'Guru from Maguru', extract: 'Let me tell you something before you go...', content: 'Brak Tru Kram'},
      {id: 4, title: 'SoraiKitan', extract: 'Even I can do this. What prevents you from doing it...', content: 'Solemn Gut'},
    ];
  }
  getArticles() {
    this.articles = angular.copy(this.articles);
    return this.articles;
  }
  getArticle(id) {
    this.articles = angular.copy(this.articles);
    return this.articles.filter(x => x.id == id)[0];
  }
  addArticle(newArticle) {
    this.articles = angular.copy(this.articles);
    this.articles.push(newArticle);
    return false;
  }
  updateArticle(updatedArticle) {
    this.articles = angular.copy(this.articles);
    this.articles = this.articles.map(x => {
      if (x.id === updatedArticle.id) return updatedArticle;
      return x;
    });
    return false;
  }
  deleteArticle(articleToDelete) {
    this.articles = angular.copy(this.articles);
    this.articles = this.articles.filter(x => x.id !== articleToDelete.id);
  }
}
