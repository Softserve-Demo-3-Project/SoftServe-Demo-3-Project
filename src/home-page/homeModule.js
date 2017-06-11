import angular from 'angular';
import ngRoute from 'angular-route';
import homeDirective from './homeDirective.js';

export default angular
    .module("home", ['ngRoute'])
    .directive('homePage', homeDirective)
    .name;