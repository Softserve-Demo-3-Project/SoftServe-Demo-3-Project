export default function () {
    return {
        restrict: "E",
        scope: {
            body: "="
        },
        template: require('./editingFieldTemplate.html')
    }
}