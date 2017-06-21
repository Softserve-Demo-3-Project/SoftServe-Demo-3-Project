export default class LoginController {
  constructor(userService, authenticationService, $location) {
    this.userService = userService;
    this.authenticationService = authenticationService;
    this.$location = $location;
    this.init();
  }

  init() {
    this.username = "";
    this.password = "";
    this.rememberMe = false;
    this.hasFailed = false;
    this.hasLoggedIn = false;
  }

  submit() {
    let _this = this;
    let username = this.username;
    let password = this.password;
    this.hasFailed = false;
    this.hasLoggedIn = false;

    this.userService.login(username, password).then(function (response) {
      let data = response.data;

      if (data.length) {
        let user = data[0];
        _this.hasLoggedIn = true;
        _this.authenticationService.setCredentials(username, password);
        _this.$location.path('/');
      } else {
        _this.hasFailed = true;
      }
    });
  }
}
