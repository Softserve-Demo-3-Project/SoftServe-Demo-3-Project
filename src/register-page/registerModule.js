import angular from 'angular';
import ngRoute from 'angular-route';

import './register-page.scss';

import regPageController from './registerPageController';

export default angular
    .module('main.register', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/register', {
                template: require('./register-page.html'),
                controller: regPageController
            })
    })
    .constant('USERS_URL', '')
    .name;
