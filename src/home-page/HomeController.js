export default class HomeController {
    constructor(AdsService,$rootScope) {
        this.ads = [];
        this.$rootScope = $rootScope;
        AdsService.getAds().then((res) => {
            this.ads = res;
        });
        console.log(this.$rootScope.globals.currentUser);
    }

    isLoggedIn() {
        return this.$rootScope.globals.currentUser ? true : false;
    }
}
