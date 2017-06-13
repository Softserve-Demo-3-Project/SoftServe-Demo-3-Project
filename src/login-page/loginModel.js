import angular from 'angular';
import ngRoute from 'angular-route';

import './reg-form-css.css';

import loginPageController from './loginPageController';

export default angular
    .module('login.module', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/login', {
                template: require('./login-page.html'),
                controller: loginPageController
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
    .name;
