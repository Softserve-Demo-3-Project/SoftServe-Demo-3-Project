import angular from 'angular';
import ngRoute from 'angular-route';

import './home-page.scss';

import editFieldDirective from './../core/directive/editingFieldDirective/editingFieldDirective';
import collapseContentModule from './../core/directive/collapseDirective/collapseContentModule';
import {
  mapService
} from '../core/services/map.service';
import {
  adsService
} from './../core/services/ads.service';

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
  .directive("editField", editFieldDirective)
  .service('mapService', mapService)
  .service("adsService", adsService)
  .name;
