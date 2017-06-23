export default class registerPageController {
  constructor(userService, authenticationService, $location) {
    this.register = "Register";
    this.userService = userService;
    this.$location = $location;
    this.authenticationService = authenticationService;
    this.hasLoggedIn = false;
  }

  onSubmit(user) {
    let self = this;
    let {
      name,
      age,
      email,
      username,
      password,
      confirmPassword
    } = user;
    self.userService.register(name, age, email, username, password).then((res) => {
        self.userService.login(username, password).then(function (response) {
          let data = response.data;

          if (data.length) {
            let user = data[0];
            self.hasLoggedIn = true;
            self.authenticationService.setCredentials(username, password);
            self.$location.path('/');
          }
        });
      })
  }
}
