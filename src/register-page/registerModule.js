import angular from 'angular';
import ngRoute from 'angular-route';

import './register-page.css';

import registerPageController from './registerPageController';

export default angular
  .module('main.register', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/register', {
        template: require('./registerTemplate.html'),
        controller: registerPageController,
        controllerAs: 'register'
      })
  })

  .constant('USERS_URL', '')
  .directive('userValidator', function ($http, $q) {
    return {
      require: 'ngModel',
      link: function ($scope, element, attrs, ngModel) {
        ngModel.$asyncValidators.userAvailable = function (modelValue, viewValue) {

          var userInput = modelValue || viewValue;
          return $http.get('http://localhost:3000/users?username=' + userInput)
            .then(function ({
              data
            }) {
              //username exists, this means validation success
              if (data.length) {
                throw new Error();
              }
              return true;
            })
            .catch(function () {
              return $q.reject('selected username does not exists');
            })

        }
      }
    }
  })
  .name;
