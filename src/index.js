
import angular from 'angular';
import ngRoute from 'angular-route';
import 'angular/angular-csp.css';
import './index.scss';

import homeModule from './home-page/homeModule';
import loginModue from './login-page/loginModel';
import registerModule from './register-page/registerModule';

angular
  .module('main', [
    ngRoute,
    homeModule,
    loginModue,
    registerModule
  ])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    // Remove "!" from url
    $locationProvider.hashPrefix('');
    // Remove "#" from url ( may have some problems with server url and SEO )
    // $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        template: '<home-page></home-page>'
      })
      .when('/login', {
        template: '<demo-welcome></demo-welcome>'
      })
      .when('/register', {
        template: '<demo-welcome></demo-welcome>'
      })
      .otherwise({ redirectTo: '/' });

    
  }])

angular.bootstrap(document.documentElement, ['main']);