import template from './articles.html'
import {ArticlesController} from './articles.controller';

export const ArticlesComponent = {
  bindings: {
    articles: '<'
  },
  template,
  controller: ArticlesController
}
