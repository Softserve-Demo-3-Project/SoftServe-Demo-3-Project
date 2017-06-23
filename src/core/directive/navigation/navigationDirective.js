import NavigationController from './NavigationController';

import './navigation.scss';

/* @ngInject */
export default function navigationDirective() {
  return {
    controller: NavigationController,
    controllerAs: 'nav',
    template: require('./navigation.html')
  };
}
