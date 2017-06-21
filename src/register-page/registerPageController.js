export default class registerPageController {
  constructor(regUserService, $http, $location) {
    this.register = "Register";
    this.regUserService = regUserService;
    this.$location = $location;
  }

  onSubmit() {
    let _this = this;
    let name = this.name;
    let age = this.age;
    let email = this.email;
    let username = this.username;
    let password = this.password;
    this.hasFailed = false;
    this.hasRegister = false;
  }
}
