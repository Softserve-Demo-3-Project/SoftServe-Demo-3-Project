import angular from 'angular';

import testModuleController from './testModuleController';

import './testModule.scss';

export default angular
    .module('main.testModule', [])
    .controller('testModuleController', testModuleController)
    .name;