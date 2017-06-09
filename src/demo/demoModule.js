import angular from 'angular';
import router from 'angular-route';
import welcomeDirective from './welcome/welcomeDirective';

export default angular
  .module('demo', ['ngRoute'])
  .config(function($routeProvider) {
	$routeProvider
	  .when('/', {
	  	template: '<demo-welcome></demo-welcome>'
	  })
	  .otherwise({
	  	template: "nqma takoa"
	  })
  })
  .directive('demoWelcome', welcomeDirective)
  .name;

