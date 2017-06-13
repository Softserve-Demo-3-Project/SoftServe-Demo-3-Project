import angular from 'angular';
import ngRoute from 'angular-route';
import homeDirective from './homeDirective.js';
import { AdsService } from './adsFactory.js';

export default angular
    .module('home', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<home-page></home-page>'
            })
    })
    .directive('homePage', homeDirective)
    .service('AdsService', AdsService)
    .name;