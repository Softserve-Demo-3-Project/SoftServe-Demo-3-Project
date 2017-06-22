export default function () {
    return {
        template: require('./collapseContentTemplate.html'),
        replace: true,
        restrict: "E",
        scope: {
            header: "=",
            body: "=",
            isLoggedIn: "&",
            onEdit: "=",
            onDelete: "&"
        },
    }
}