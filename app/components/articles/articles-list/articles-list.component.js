import template from './articles-list.html';
import {ArticlesListController} from './articles-list.controller';

export const ArticlesListComponent = {
  bindings: {
    articles: '<'
  },
  template,
  controller: ArticlesListController
}
