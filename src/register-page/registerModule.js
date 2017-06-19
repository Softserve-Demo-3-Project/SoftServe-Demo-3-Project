import angular from 'angular';

import RegisterController from './RegisterController';

import './registerTemplate.scss';

export default angular
    .module('main.register', [])
    .controller('RegisterController', RegisterController)
    .name;