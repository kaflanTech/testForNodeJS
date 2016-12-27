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
      console.log('changed,', this.articles);
      this.articles = angular.copy(this.articles);
    }
  }
  getArticles() {
    this.ArticlesService.getArticles().then(res => this.articles = res);
  }
  addArticle({newArticle}) {
    newArticle.id = this.articles[this.articles.length-1].id+1;
    this.ArticlesService.addArticle(newArticle)
      .then(res => {
        this.getArticles();
        this.cancelForm();
      });
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
