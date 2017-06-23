export class UserService {
  constructor($http) {
    this.$http = $http;
  }

  login(username, password) {
    return this.$http({
      method: 'GET',
      url: 'http://localhost:3000/users',
      params: {
        username: username,
        password: password
      }
    });
  }

  register(name, age, email, username, password, confirmPassword) {
    return this.$http({
      method: 'POST',
      url: 'http://localhost:3000/users',
      data: {
        name: name,
        age: age,
        email: email,
        username: username,
        password: password,
        confirmPassword: confirmPassword
      }
    });
  }

  passConfirm() {
    this.passValidation = false;
    this.changepassword = function () {
      let {
        password,
        confirmPassword
      } = passes;

      if (passes.password.value !== passes.confirmPassword.value == false) {
        this.passValidation = false;
      } else {
        this.passValidation = true;
      }
    };
  }




  // Username existance check


  isUserTaken(username) {
    return this.$http({
      method: 'GET',
      url: 'http://localhost:3000/users',
      data: {
        username: username
      }
    });
  }

  //   isUserTaken(username, ) {
  //     UserService.getUsername.username.$asyncValidators.uniqueUsername = function (modelValue, viewValue) {
  //       var value = modelValue || viewValue;

  //       // Lookup user by username
  //       return $http.get('/api/users/' + value).
  //       then(function resolved() {
  //         //username exists, this means validation fails
  //         return $q.reject('exists');
  //       }, function rejected() {
  //         //username does not exist, therefore this validation passes
  //         return true;
  //       });
  //     };
  //   }












  //   isUserTaken(username) {
  //     return this.$http({
  //       method: 'GET',
  //       url: 'http://localhost:3000/users',
  //       data: {
  //         username: username
  //       }
  //     });
  //   }


  //   isUserTaken() {
  //     angular.module('registerPageController', ['ngSanitize']).
  //     directive('contenteditable', ['$sce', function ($sce) {
  //       return {
  //         restrict: 'A',
  //         require: 'username',
  //         link: function (scope, element, attrs, username) {
  //           username.$asyncValidators.uniqueUsername = function (modelValue, viewValue) {
  //             var value = modelValue || viewValue;

  //             // Lookup user by username
  //             return $http.get('http://localhost:3000/users' + value).
  //             then(function resolved() {
  //               //username exists, this means validation fails
  //               return $q.reject('exists');
  //             }, function rejected() {
  //               //username does not exist, therefore this validation passes
  //               return true;
  //             });
  //           };
  //         }
  //       };
  //     }]);
  //   }

}
