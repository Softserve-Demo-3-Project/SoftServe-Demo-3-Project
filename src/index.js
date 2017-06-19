import angular from 'angular';
import ngRoute from 'angular-route';
import ngStrap from 'angular-strap';
import ngCookies from 'angular-cookies';

import ngMessages from 'angular-messages';

import 'bootstrap/dist/css/bootstrap.css';
// import 'angular/angular-csp.css';
import './index.scss';

// import demoModule from './demo/demoModule';

import homeModule from './home-page/homeModule';
//import loginModule from './login-page/loginModule';
import registerModule from './register-page/registerModule';
import navigationDirective from './core/directive/navigation/navigationDirective';
import { UserService } from './core/services/user.service';
import { AuthenticationService } from './core/services/authentication.service';

angular
  .module('main', [
    ngRoute,
    ngMessages,
    homeModule,
    registerModule,
    ngStrap,
    ngCookies
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
  .directive("navigation", navigationDirective)

angular.bootstrap(document.documentElement, ['main']);



