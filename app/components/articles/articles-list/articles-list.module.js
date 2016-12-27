import angular from 'angular';

import {ArticlesListComponent} from './articles-list.component';
import './articles-list.scss';

export const ArticlesListModule = angular
  .module('articles.list', [])
  .component('articlesList', ArticlesListComponent)
  .name;
