import angular from 'angular';
import ngRoute from 'angular-route';
import homeDirective from './homeDirective.js';

export default angular
    .module("home", ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<home-page></home-page>'
            })
    })
    .directive('homePage', homeDirective)
    .name;