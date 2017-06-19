import angular from 'angular';

import collapseContentDirective from './collapseContentDirective/collapseContentDirective.js';
import collapseBodyDirective from './collapseBodyDirective/collapseBodyDirective.js';

export default angular
    .module('collapseContentModule', [])
    .directive("collapseContent", collapseContentDirective)
    .directive("collapseBody", collapseBodyDirective)
    .name;