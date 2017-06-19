import angular from 'angular';
import ngRoute from 'angular-route';

import './home-page.scss';
import editFieldDirective from './editingFieldDirective/editingFieldDirective';
import collapseContentModule from './../core/directive/collapseDirective/collapseContentModule';

import HomeController from './HomeController';

export default angular
    .module('main.home', ['ngRoute', collapseContentModule])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                template: require('./homeTemplate.html'),
                controller: HomeController,
                controllerAs: "home"
            })
    })
    .constant('ALL_ADS_URL', 'http://localhost:3000/advertisements')
    .directive("editField", editFieldDirective)
    .name;