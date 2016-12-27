import angular from 'angular';

import {NavbarComponent} from './navbar.component';
import './navbar.scss';

export const NavbarModule = angular
  .module('navbar', [])
  .component('navbar', NavbarComponent)
  .name;
