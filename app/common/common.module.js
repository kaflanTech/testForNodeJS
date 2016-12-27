import angular from 'angular';

import {HeaderModule} from './header/header.module';
import {FooterModule} from './footer/footer.module';
import {NavbarModule} from './navbar/navbar.module';
import {HomeModule} from './home/home.module';

export const CommonModule = angular
  .module('app.common', [
    FooterModule,
    HeaderModule,
    NavbarModule,
    HomeModule
  ])
  .name;
