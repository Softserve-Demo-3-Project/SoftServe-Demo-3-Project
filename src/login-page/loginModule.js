import angular from 'angular';
import ngRoute from 'angular-route';

import './login-page.scss';

import loginPageController from './loginPageController';

export default angular
    .module('main.login', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/login', {
                template: require('./login-page.html'),
                controller: loginPageController
            })
    })
    .name;
