import angular from 'angular';
import ngRoute from 'angular-route';

import './home-page.scss';

import homePageController from './homePageController';
import advertisementFactory from './advertisementFactory';

export default angular
    .module('home.module', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                template: require('./home-page.html'),
                controller: homePageController
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
    .factory('advertisementFactory', advertisementFactory)
    .name;


