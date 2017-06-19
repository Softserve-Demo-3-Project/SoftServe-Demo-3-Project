export default function () {
    return {
        template: require('./collapseBodyTemplate.html'),
        replace: true,
        scope: {
            body: "="
        },
        restrict: 'E',
        require: '^collapseContent'
    }
}