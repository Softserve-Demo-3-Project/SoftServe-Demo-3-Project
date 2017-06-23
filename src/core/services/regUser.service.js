// export class RegUserService {
//   constructor($http) {
//     this.$http = $http;
//   }

//   register(name, age, email, username, password, confirmPassword) {
//     return this.$http({
//       method: 'POST',
//       url: 'http://localhost:3000/users',
//       data: {
//         name: name,
//         age: age,
//         email: email,
//         username: username,
//         password: password,
//         confirmPassword: confirmPassword
//       }
//     }).then(function (data) {
//       $window.location.href('/');
//     });
//   }
// }
// NOT USING IT