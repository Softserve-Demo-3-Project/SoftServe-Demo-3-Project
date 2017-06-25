export default class HomeController {
    /* @ngInject */
    constructor(adsService, $rootScope, authenticationService) {
        this.ads = [];
        this.adsService = adsService;
        this.authenticationService = authenticationService;
        this.$rootScope = $rootScope;
        this.fetchAds = this.fetchAds.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.fetchAds();
        this.towns = ["all", "Emil", "Tobias", "Linus"];
    }

    fetchAds() {
        this.adsService.getAds().then((res) => {
            this.ads = res.data;
            // console.log(res)
        });
    }

    isLoggedIn() {
        return this.authenticationService.getCurrentUserId();
    }

    onEdit(query) {
        this.adsService.updateAd(query);
    }

    onDelete(id) {
        this.adsService.deleteAd(id).then((res) => {
            // console.log(res)
            this.fetchAds();
        });
    }
}
