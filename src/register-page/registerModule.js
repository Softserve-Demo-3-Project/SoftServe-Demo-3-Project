import angular from 'angular';
import ngRoute from 'angular-route';

import './register-page.css';

import registerPageController from './registerPageController';
import { RegUserService } from './../core/services/regUser.service';

export default angular
    .module('main.register', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/register', {
                template: require('./registerTemplate.html'),
                controller: registerPageController,
                controllerAs: 'register'
            })
    })
    .service('regUserService', RegUserService)
    .constant('USERS_URL', '')
    .name;
