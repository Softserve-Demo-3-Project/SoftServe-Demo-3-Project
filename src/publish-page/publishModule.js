import angular from 'angular';

import PublishController from './PublishController';

import './publishTemplate.scss';

export default angular
    .module('main.publish', [])
    .controller('PublishController', PublishController)
    .name;