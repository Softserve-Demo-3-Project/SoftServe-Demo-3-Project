import angular from 'angular';

import LoginController from './LoginController';

import './loginTemplate.html';

export default angular
    .module('main.login', [])
    .controller('LoginController', LoginController)
    .name;