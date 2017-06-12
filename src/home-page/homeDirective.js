import  HomeController  from './HomeController.js';

export default function homeDirective() {
    return {
        controller: HomeController,
        controllerAs: 'home',
        template: require('./homeTemplate.html')
    }
}