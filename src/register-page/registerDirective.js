import RegisterController from './RegisterController';

import './registerTemplate.scss';

import './reg-form-css.css';

/* @ngInject */
export default function registerDirective() {
    return {
        controller: RegisterController,
        controllerAs: 'reg',
        template: require('./registerTemplate.html')
    };
}