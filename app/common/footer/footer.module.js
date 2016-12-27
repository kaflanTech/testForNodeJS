import angular from 'angular';

import {FooterComponent} from './footer.component';
import './footer.scss';

export const FooterModule = angular
  .module('footer', [])
  .component('footerComponent', FooterComponent)
  .name;
