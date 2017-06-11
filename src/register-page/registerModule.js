import angular from 'angular';
import ngRoute from 'angular-route';

import './register-page.scss';

import registerPageController from './registerPageController';

export default angular
    .module('register.module', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/register', {
                template: require('./register-page.html'),
                controller: registerPageController
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
    .name;
