import angular from 'angular';
import router from 'angular-route';
import ngCookies from 'angular-cookies';

// Models
import homeDirective from './home-page/homeDirective';
import registerDirective from './register-page/registerDirective';
import loginDirective from './login-page/loginDirective';
import publishDirective from './publish-page/publishDirective';

// Common
import { AdsService } from './core/services/adsService';
import { UserService } from './core/services/user.service';
import { AuthenticationService } from './core/services/authentication.service';
import navigationDirective from './core/directive/navigation/navigationDirective';

import 'bootstrap/dist/css/bootstrap.css';
import 'angular/angular-csp.css';
import './index.scss';

// import demoModule from './demo/demoModule';

angular.module('main', ['ngRoute', 'ngCookies'])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    // Remove "!" from url
    $locationProvider.hashPrefix('');

    // Remove "#" from url ( may have some problems with server url and SEO )
    // $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        template: '<home-module></home-module>',
      })
      .when('/login', {
        template: '<login-module></login-module>'
      })
      .when('/register', {
        template: '<register-module></ register-module>'
      })
      .when('/publish', {
        template: '<publish-module></publish-module>'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .directive('homeModule', homeDirective)
  .directive('loginModule', loginDirective)
  .directive('registerModule', registerDirective)
  .directive('publishModule', publishDirective)
  .directive('navigation', navigationDirective)
  .service('AdsService', AdsService)
  .service('userService', UserService)
  .service('authenticationService', AuthenticationService)
  .run(['$rootScope', '$location', '$cookies', '$http',
    function($rootScope, $location, $cookies, $http) {
      // keep user logged in after page refresh
      $rootScope.globals = $cookies.getObject('globals') || {};
      if ($rootScope.globals.currentUser) {
          $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
      }

      $rootScope.$on('$locationChangeStart', function (event, next, current) {
          // redirect to login page if not logged in and trying to access a restricted page
          let pages = ['/login', '/register'];
          //let restrictedPage = pages.indexOf($location.path()) === -1;
          //TODO add restriction conditions for guests
          let restrictedPage = false; // no restrictions
          let loggedIn = $rootScope.globals.currentUser;
          if (restrictedPage && !loggedIn) {
              $location.path('/login');
          }
      });
    }])
  .name;

angular.bootstrap(document.documentElement, ['main']);

