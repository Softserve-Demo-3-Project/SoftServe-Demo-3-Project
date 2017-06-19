import angular from 'angular';
import ngRoute from 'angular-route';
import ngStrap from 'angular-strap';

import 'bootstrap/dist/css/bootstrap.css';
// import 'angular/angular-csp.css';
import './index.scss';

// import demoModule from './demo/demoModule';

import homeModule from './home-page/homeModule';
import loginModule from './login-page/loginModule';
import registerModule from './register-page/registerModule';

angular
  .module('main', [
    ngRoute,
    homeModule,
    loginModule,
    registerModule,
    ngStrap
  ])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    // Remove "!" from url
    $locationProvider.hashPrefix('');

    // Remove "#" from url ( may have some problems with server url and SEO )
    // $locationProvider.html5Mode(true);

    $routeProvider
      .otherwise({
        redirectTo: '/home'
      });
  }])

angular.bootstrap(document.documentElement, ['main']);



