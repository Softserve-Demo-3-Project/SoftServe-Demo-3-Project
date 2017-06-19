export default function () {
    return {
        template: require('./collapseContentTemplate.html'),
        replace: true,
        restrict: "E",
        transclude: true,
        scope: {
            header: "@",
            body: "=",
        },
    }
}