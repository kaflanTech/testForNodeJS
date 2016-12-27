import template from './article-detail.html';

import {ArticleDetailController} from './article-detail.controller';

export const ArticleDetailComponent = {
  bindings: {
    article: '<'
  },
  template,
  controller: ArticleDetailController
}
