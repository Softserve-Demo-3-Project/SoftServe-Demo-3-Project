export default class registerPageController {
  constructor(userService, authenticationService, $location) {
    this.register = "Register";
    this.userService = userService;
    this.$location = $location;
  }

  onSubmit() {
    let {user: {name, age, email, username, password}} = this;
}
