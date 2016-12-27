export class ArticleDetailController {
  constructor(ArticlesService, $state) {
    'ngInject';
    this.$state = $state;
    this.ArticlesService = ArticlesService;
  }
  $onInit() {
    this.originalArticle = angular.copy(this.article);
  }
  $onChanges(changes) {
    if (changes.article) {
      this.article = angular.copy(this.article);
    }
  }
  getArticle() {
    this.article = this.ArticlesService.getArticle(this.article.id);
    this.originalArticle = angular.copy(this.article);
  }
  deleteArticle() {
    let confirm = prompt('Are you sure you want to delete this article? yes/no');
    confirm = confirm.toLowerCase();
    if (confirm === 'yes' || confirm === 'y') {
      this.ArticlesService.deleteArticle(this.article);
      this.$state.go('articles');
    }
  }
  editArticle({updatedArticle}) {
    this.ArticlesService.updateArticle(updatedArticle);
    this.getArticle();
    this.isEditing = false;
  }
  cancelForm() {
    this.isEditing = false;
    this.article = angular.copy(this.originalArticle);
  }
}
