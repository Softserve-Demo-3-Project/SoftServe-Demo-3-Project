import angular from 'angular';
import ngRoute from 'angular-route';

import './home-page.scss';

import homePageController from './homePageController';

export default angular
    .module('main.home', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                template: require('./home-page.html'),
                controller: homePageController
            })
    })
    .constant('ALL_ADS_URL', 'http://localhost:3000/advertisements')
    .name;