import angular from 'angular';
import ngRoute from 'angular-route';

// import ngAnimate from 'angular-animate';

import './publish-page.css';

import PublishPageController from './PublishPageController';
import {mapService} from  '../core/services/map.service'

export default angular.module('main.publish', ['ngRoute']).config(function($routeProvider) {
  $routeProvider.when('/publish', {
    template: require('./publish-page.html'),
    controller: PublishPageController
  })
}).value('options', [
  {
    id: '1 Room',
    type: '1 Room'
  }, {
    id: '2 Room',
    type: '2 Room'
  }, {
    id: '3 Room',
    type: '3 Room'
  }, {
    id: 'House',
    type: 'House'
  }
])
.service('mapService', mapService)
.name;
