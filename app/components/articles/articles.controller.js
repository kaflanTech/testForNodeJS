export class ArticlesController {
  constructor(ArticlesService) {
    'ngInject';
    this.ArticlesService = ArticlesService;
  }
  $onInit() {
    this.newArticle = {
      id: null,
      title: '',
      extract: '',
      content: ''
    }
    this.showForm = false;
  }
  $onChanges(changes) {
    if (changes.articles) {
      this.articles = angular.copy(this.articles);
    }
  }
  getArticles() {
    this.articles = this.ArticlesService.getArticles();
  }
  addArticle({newArticle}) {
    newArticle.id = this.articles[this.articles.length-1].id+1;
    this.ArticlesService.addArticle(newArticle);
    this.getArticles();
    this.cancelForm();
  }
  cancelForm() {
    this.showForm = false;
    this.newArticle = {
      id: null,
      title: '',
      extract: '',
      content: ''
    }
  }
}
