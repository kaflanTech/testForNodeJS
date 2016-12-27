import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import {ComponentsModule} from './components/components.module';
import {CommonModule} from './common/common.module';
import {AppComponent} from './app.component';
import './app.scss';


export const AppModule = angular
  .module('app', [
    ComponentsModule,
    CommonModule,
    uiRouter,
    ngAnimate
  ])
  .component('app', AppComponent)
  .name;


angular.bootstrap(document.body, ['app']);
