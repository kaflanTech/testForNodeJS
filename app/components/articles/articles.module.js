import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {ArticlesComponent} from './articles.component';
import {ArticlesService} from './articles.service';
import './articles.scss';

import {ArticlesListModule} from './articles-list/articles-list.module';
import {ArticleDetailModule} from './article-detail/article-detail.module';
import {ArticleFormModule} from './article-form/article-form.module';

export const ArticlesModule = angular
  .module('articles', [
    ArticlesListModule,
    ArticleDetailModule,
    ArticleFormModule,
    uiRouter
  ])
  .component('articles', ArticlesComponent)
  .service('ArticlesService', ArticlesService)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('articles', {
        url: '/articles',
        component: 'articles',
        resolve: {
          articles: ArticlesService => ArticlesService.getArticles()
        }
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;
