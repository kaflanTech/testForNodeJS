import angular from 'angular';

import {ArticleFormComponent} from './article-form.component';
import './article-form.scss';

export const ArticleFormModule = angular
  .module('articles.form', [])
  .component('articleForm', ArticleFormComponent)
  .name;
