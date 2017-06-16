import LoginController from './LoginController';

import './loginTemplate.scss';

/* @ngInject */
export default function loginDirective() {
    return {
        controller: LoginController,
        controllerAs: 'login',
        template: require('./loginTemplate.html')
    };
}