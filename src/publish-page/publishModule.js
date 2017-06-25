import angular from 'angular';
import ngRoute from 'angular-route';
// import base64  from 'angular-base64';

// import ngAnimate from 'angular-animate';

import './publish-page.css';

import PublishPageController from './PublishPageController';
import {mapService} from  '../core/services/map.service';
import {adsService} from '../core/services/ads.service';
import {convertToString} from '../core/services/convertToString.service';
import fileModel from '../core/directive/fileUpload/fileModel';

export default angular
.module('main.publish', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider.when('/publish', {
    template: require('./publish-page.html'),
    controller: PublishPageController
  })
})
.service('convertToString', convertToString)
.service('mapService', mapService) //delete it
.service('adsService', adsService)
.directive('fileModel', fileModel)
.value('options', [
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
.name;
