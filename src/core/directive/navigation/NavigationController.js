export default class NavigationController {
  constructor($rootScope, $location, authenticationService) {
    let _this = this;
    this.$location = $location;
    this.authenticationService = authenticationService;
    this.user = $rootScope.globals.currentUser;

    $rootScope.$watch('globals', function () {
      _this.user = $rootScope.globals.currentUser;
    })
  }

  isLogged() {
    return !!this.user;
  }

  logout() {
    this.authenticationService.clearCredentials();
    this.$location.path('/login');
  }
}
