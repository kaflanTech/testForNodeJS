import angular from 'angular';
import {ArticlesModule} from './articles/articles.module';

export const ComponentsModule = angular
  .module('app.components', [
    ArticlesModule
  ])
  .name;
