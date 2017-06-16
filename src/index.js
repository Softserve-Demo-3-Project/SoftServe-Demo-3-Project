import angular from 'angular';
import router from 'angular-route';

// Models
import homeDirective from './home-page/homeDirective';
import registerDirective from './register-page/registerDirective';
import loginDirective from './login-page/loginDirective';
import publishDirective from './publish-page/publishDirective';

// Common
import { AdsService } from './core/services/adsService';
import navigationDirective from './core/directive/navigation/navigationDirective';

import 'bootstrap/dist/css/bootstrap.css';
import 'angular/angular-csp.css';
import './index.scss';

// import demoModule from './demo/demoModule';

angular.module('main', ['ngRoute'])
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
  .name;

angular.bootstrap(document.documentElement, ['main']);

