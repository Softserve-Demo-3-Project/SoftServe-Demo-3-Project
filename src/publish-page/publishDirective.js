import PublishController from './PublishController';

import './publishTemplate.scss';

/* @ngInject */
export default function PublishDirective() {
    return {
        controller: PublishController,
        controllerAs: 'publish',
        template: require('./publishTemplate.html')
    };
}