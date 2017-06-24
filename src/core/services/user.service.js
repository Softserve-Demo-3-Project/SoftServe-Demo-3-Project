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

}
