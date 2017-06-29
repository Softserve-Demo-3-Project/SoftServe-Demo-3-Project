import angular from 'angular';
import ngRoute from 'angular-route';
import ngCookies from 'angular-cookies'

import './loginTemplate.scss';

import LoginController from './LoginController';
import {
  UserService
} from './../core/services/user.service';
import {
  AuthenticationService
} from './../core/services/authentication.service.js';


export default angular
  .module('main.login', ['ngRoute', 'ngCookies'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        template: require('./loginTemplate.html'),
        controller: LoginController,
        controllerAs: 'login'
      })
  })
  .service('userService', UserService)
  .service('authenticationService', AuthenticationService)
  .name;
