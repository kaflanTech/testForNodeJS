import template from './article-form.html';
import {ArticleFormController} from './article-form.controller';

export const ArticleFormComponent = {
  bindings: {
    article: '<',
    actionType: '@',
    onAddArticle: '&',
    onCancelForm: '&',
    onEditArticle: '&'
  },
  template,
  controller: ArticleFormController
}
