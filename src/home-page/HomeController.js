export default class HomeController {
    /* @ngInject */
    constructor(AdsService, $rootScope) {
        this.ads = [];
        this.AdsService = AdsService;
        this.$rootScope = $rootScope;
        this.fetchAds = this.fetchAds.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.fetchAds();
    }

    fetchAds() {
        this.AdsService.getAds().then((res) => {
            this.ads = res;
        });
    }

    isLoggedIn() {
        return this.$rootScope.globals.currentUser ? this.$rootScope.globals.currentUser.username : false;
    }

    onEdit(query) {
        this.AdsService.updateAd(query);
    }

    onDelete(id) {
        this.AdsService.deleteAd(id)
        this.fetchAds();
    }
}
