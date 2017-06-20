    import angular from 'angular';
import ngRoute from 'angular-route';

import './publish-page.scss';

import PublishPageController from './PublishPageController';

export default angular
    .module('main.publish', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/publish', {
                template: require('./publish-page.html'),
                controller: PublishPageController
            })
    })
    .name;