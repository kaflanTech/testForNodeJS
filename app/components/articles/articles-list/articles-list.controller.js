export class ArticlesListController {
  constructor() {
    'ngInject';
  }
  $onInit() {}
  $onChanges(changes) {
    if(changes.articles) {
      this.articles = angular.copy(this.articles);
    }
  }
  
}
