import  HomeController  from './HomeController.js';

import './homeTemplate.scss';

/* @ngInject */
export default function homeDirective() {
    return {
        controller: HomeController,
        controllerAs: 'home',
        template: require('./homeTemplate.html')
    }
}