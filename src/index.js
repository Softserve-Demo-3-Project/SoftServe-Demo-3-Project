import angular from 'angular';
import ngRoute from 'angular-route';
import ngStrap from 'angular-strap';
import ngCookies from 'angular-cookies';
import ngSanitize from 'angular-sanitize';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

import homeModule from './home-page/homeModule';
import loginModule from './login-page/loginModule';
import registerModule from './register-page/registerModule';
import publishModule from './publish-page/publishModule';
import navigationDirective from './core/directive/navigation/navigationDirective';
import mapLoadDirective from './core/directive/mapLoad/mapLoadDirective';
import {
  UserService
} from './core/services/user.service';
import {
  AuthenticationService
} from './core/services/authentication.service';

angular
  .module('main', [
    ngRoute,
    ngMessages,
    homeModule,
    registerModule,
    loginModule,
    publishModule,
    ngStrap,
    ngCookies,
    ngSanitize,
    ngAnimate
  ])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider
      .otherwise({
        redirectTo: '/home'
      });
  }])
  .directive("navigation", navigationDirective)
  .directive("mapLoad", mapLoadDirective)
  .run(['$rootScope', '$location', '$cookies', '$http',
    function ($rootScope, $location, $cookies, $http) {
      $rootScope.globals = $cookies.getObject('globals') || {};
      if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
      }

      $rootScope.$on('$locationChangeStart', function (event, next, current) {

        let pages = ['/login', '/register', '/home', 'publish'];
        let restrictedPage = pages.indexOf($location.path()) === -1;

        let loggedIn = $rootScope.globals.currentUser;
        if (!restrictedPage && loggedIn || restrictedPage && !loggedIn) {
          $location.path('/home');
        }
      });
    }
  ])

angular.bootstrap(document.documentElement, ['main']);
