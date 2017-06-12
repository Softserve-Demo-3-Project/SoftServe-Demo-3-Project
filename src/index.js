
import angular from 'angular';
import ngRoute from 'angular-route';

import 'angular/angular-csp.css';
import './index.scss';

// import demoModule from './demo/demoModule';

import homeModule from './home-page/homeModule';
import loginModue from './login-page/loginModel';
import registerModule from './register-page/registerModule';

import 'bootstrap/dist/css/bootstrap.css';
import 'angular-ui-bootstrap';


angular
  .module('main', [
    ngRoute,
    homeModule,
    loginModue,
    registerModule,
    'ui.bootstrap'
  ])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    // Remove "!" from url
    $locationProvider.hashPrefix('');

    // Remove "#" from url ( may have some problems with server url and SEO )
    // $locationProvider.html5Mode(true);
  }])

angular.bootstrap(document.documentElement, ['main']);



// import angular from 'angular';
// import router from 'angular-route';

// import homePageController from './home-page/homePageController'

// import 'angular/angular-csp.css';
// import './index.scss';

// // import demoModule from './demo/demoModule';

// angular.module('main', ['ngRoute'])
//   .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

//     // Remove "!" from url
//     $locationProvider.hashPrefix('');

//     // Remove "#" from url ( may have some problems with server url and SEO )
//     // $locationProvider.html5Mode(true);

//     $routeProvider
//       .when('/home', {
//         template: require('./home-page/home-page.html'),
//         controller: homePageController
//       })
//       .when('/login', {
//         template: '<demo-welcome>Gosho</demo-welcome>'
//       })
//       .when('/register', {
//         template: '<demo-welcome>Gosho</demo-welcome>'
//       })
//       .otherwise({ redirectTo: '/home' });
//   }])

// angular.bootstrap(document.documentElement, ['main']);

