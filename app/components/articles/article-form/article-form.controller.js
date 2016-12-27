export class ArticleFormController {
  constructor() {
    'ngInject';
  }
  $onInit() {}
  $onChanges(changes) {
    if (changes.article) {
      this.article = angular.copy(this.article);
    }
  }
  onSubmit() {
    if (!this.article.title || !this.article.content || !this.article.extract) return false;
    if (this.actionType === "create") {
      this.onAddArticle({
        $event: {
          newArticle: this.article
        }
      });
    }
    else if (this.actionType === "update") {
      this.onEditArticle({
        $event: {
          updatedArticle: this.article
        }
      });
    }
  }
  onCancelForm() {
    this.cancelForm();
  }
}
