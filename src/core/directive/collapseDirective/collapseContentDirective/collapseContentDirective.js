export default function () {
  return {
    template: require('./collapseContentTemplate.html'),
    replace: true,
    restrict: "E",
    scope: {
      body: "=",
      alert: "=",
      isLoggedIn: "&",
      onEdit: "&",
      onDelete: "&"
    },
    controller: function ($scope) {
      $scope.editing = false;
      $scope.bodyShowned = false;

      $scope.editingToggle = () => {
        $scope.editing = !$scope.editing;
      }

      $scope.bodyToggle = () => {
        $scope.bodyShowned = !$scope.bodyShowned;
      }
    }
  }
}
