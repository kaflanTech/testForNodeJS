import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {ArticleDetailComponent} from './article-detail.component';
import './article-detail.scss';

export const ArticleDetailModule = angular
  .module('articles.detail', [
    uiRouter
  ])
  .component('articleDetail', ArticleDetailComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('article', {
        url: '/articles/:id',
        component: 'articleDetail',
        resolve: {
          article: (ArticlesService, $stateParams, $state) => {
            let article = ArticlesService.getArticle($stateParams.id);
            if(article) {
              return article;
            } else {
              $state.go('articles');
              return false;
            }
          }
        }
      })
    $urlRouterProvider.otherwise('/articles');
  })
  .name;
