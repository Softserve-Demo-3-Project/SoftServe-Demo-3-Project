import angular from 'angular';
import router from 'angular-route';
// import uiRouter from 'angular-ui-router';

// Models
import homeModule from './home-page/homeModule';
import loginModule from './login-page/loginModule';
import registerModule from './register-page/registerModule';
import publishModule from './publish-page/publishModule';


// import homeDirective from './home-page/homeDirective';
// import registerDirective from './register-page/registerDirective';
// import loginDirective from './login-page/loginDirective';
// import publishDirective from './publish-page/publishDirective';

// Common
import navigationDirective from './core/directive/navigation/navigationDirective';

import testModule from './testModule/testModuleIndex';

import 'bootstrap/dist/css/bootstrap.css';
import 'angular/angular-csp.css';
import './index.scss';

// import demoModule from './demo/demoModule';

export default angular
  .module('main', [
    router,
    // testModule,
    homeModule,
    loginModule,
    registerModule,
    publishModule
  ])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    // Remove "!" from url
    $locationProvider.hashPrefix('');

    // Remove "#" from url ( may have some problems with server url and SEO )
    // $locationProvider.html5Mode(true);

    $routeProvider
      // .when('/test', {
      //   template: require('./testModule/testModule.html'),
      //   controller: 'testModuleController'
      // })
      .when('/', {
        template: require('./home-page/homeTemplate.html'),
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/login', {
        template: require('./login-page/loginTemplate.html'),
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/register', {
        template: require('./register-page/registerTemplate.html'),
        controller: 'RegisterController',
        controllerAs: 'reg'
      })
      .when('/publish', {
        template: require('./publish-page/publishTemplate.html'),
        controller: 'PublishController',
        controllerAs: 'publish'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .directive('navigation', navigationDirective)

angular.bootstrap(document.documentElement, ['main']);


    //   $routeProvider
    //     .when('/', {
    //       template: '<home-module></home-module>',
    //     })
    //     .when('/login', {
    //       template: '<login-module></login-module>'
    //     })
    //     .when('/register', {
    //       template: '<register-module></ register-module>'
    //     })
    //     .when('/publish', {
    //       template: '<publish-module></publish-module>'
    //     })
    //     .otherwise({
    //       redirectTo: '/'
    //     });
    // }])
    // .directive('homeModule', homeDirective)
    // .directive('loginModule', loginDirective)
    // .directive('registerModule', registerDirective)
    // .directive('publishModule', publishDirective)
    // .directive('navigation', navigationDirective)
    // .service('AdsService', AdsService)
    // .name;




