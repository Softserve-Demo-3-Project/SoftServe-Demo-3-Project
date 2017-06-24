import MapDirectiveController from './MapDirectiveController';

/* @ngInject */
export default function mapDirective() {
    return {
        controller: MapDirectiveController,
        controllerAs: 'map',
        template: require('./map-directive.html'),
        scope:{
            ads: '='
        },
        restrict: 'E'
    };
}