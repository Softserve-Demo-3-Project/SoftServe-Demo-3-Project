import angular from 'angular';

import HomeController from './HomeController';

import { AdsService } from '../core/services/adsService';

import './homeTemplate.scss';

export default angular
    .module('main.home', [])
    .controller('HomeController', HomeController)
    .service('AdsService', AdsService)
    .name;