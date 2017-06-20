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
import loginModule from './login-page/loginModule';
import registerModule from './register-page/registerModule';
import publishModule from './publish-page/publishModule';
import navigationDirective from './core/directive/navigation/navigationDirective';
import { UserService } from './core/services/user.service';
import { AuthenticationService } from './core/services/authentication.service';

angular
  .module('main', [
    ngRoute,
    ngMessages,
    homeModule,
    registerModule,
    loginModule,
    publishModule,
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
  .run(['$rootScope', '$location', '$cookies', '$http',
        function ($rootScope, $location, $cookies, $http) {
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

angular.bootstrap(document.documentElement, ['main']);



