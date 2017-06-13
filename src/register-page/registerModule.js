import angular from 'angular';
import ngRoute from 'angular-route';

import './reg-form-css.css';

import registerPageController from './regPageController';

export default angular
    .module('register.module', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/register', {
                template: require('./reg-form.html'),
                controller: regPageController
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
    .name;
