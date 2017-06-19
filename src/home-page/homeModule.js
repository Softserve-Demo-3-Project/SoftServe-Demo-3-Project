import angular from 'angular';
import homeDirective from './moduleConfig/homeDirective';
import collapseContentModule from './../core/directive/collapseDirective/collapseContentModule';
import editFieldDirective from './moduleConfig/editingFieldDirective/editingFieldDirective';

export default angular
    .module("home", [collapseContentModule])
    .directive("homePage", homeDirective)
    .directive("editField", editFieldDirective)
    .name;