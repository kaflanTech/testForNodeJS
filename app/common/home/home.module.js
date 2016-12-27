import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {HomeComponent} from './home.component';
import './home.scss';

export const HomeModule = angular
  .module('home', [
    uiRouter
  ])
  .component('home', HomeComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('home', {
        url: '/',
        component: 'home'
      })
    $urlRouterProvider.otherwise('/');
  })
  .name;
