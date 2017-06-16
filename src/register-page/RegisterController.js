var userRegForm = angular.module('RegFormModule', ['jcs-autoValidate']);

userRegForm.run(function(defaultErrorMessageResolver) {
    defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
        errorMessages['tooYoung'] = 'You must be at least {0} years old to use this site';
        errorMessages['badUsername'] = 'Username can only contain numbers, Letters and _';
        errorMessages['badName'] = 'Name can only contain Letters'
    });
});

userRegForm.controller('RegFormModuleCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.sendMessage = function() {
        $location.path('../login-page/login-page.html');
    };
}]);
