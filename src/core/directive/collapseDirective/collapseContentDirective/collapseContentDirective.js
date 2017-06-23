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
        controller: function ($scope) {
            $scope.editingToggle = () => {
                $scope.editing = !$scope.editing;
            }
        }
    }
}