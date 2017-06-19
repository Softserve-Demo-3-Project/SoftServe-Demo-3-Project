import HomeController from './HomeController.js';

export default function () {
    'ngInject';
    return {
        transclude: true,
        restrict: 'E',
        controller: HomeController,
        controllerAs: 'home',
        template: require("./homeTemplate.html")
    }
}