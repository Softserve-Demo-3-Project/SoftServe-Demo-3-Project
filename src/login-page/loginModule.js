import angular from 'angular';
import ngRoute from 'angular-route';

import './loginTemplate.scss';

import LoginController from './LoginController';
import { UserService } from './../core/services/user.service';
import { AuthenticationService } from './../core/services/authentication.service.js';


export default angular
    .module('main.login', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/login', {
                template: require('./loginTemplate.html'),
                controller: LoginController,
                controllerAs: 'login'
            })
    })
    .service("userService", UserService)
    .service("authenticationService", AuthenticationService)
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
    .name;
