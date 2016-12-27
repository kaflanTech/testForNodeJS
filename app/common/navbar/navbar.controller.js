export class NavbarController {
  constructor() {
    'ngInject';
  }
  $onInit() {
    this.states = [
      {state: 'home', name: 'Home'},
      {state: 'articles', name: 'Articles'}
    ];
  }
}
