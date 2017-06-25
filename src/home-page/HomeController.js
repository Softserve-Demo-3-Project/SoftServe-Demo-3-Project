export default class HomeController {
    /* @ngInject */
    constructor(adsService, $rootScope) {
        this.ads = [];
        this.alert = {};
        this.adsService = adsService;
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
        });
    }

    isLoggedIn() {
        return this.$rootScope.globals.currentUser ? this.$rootScope.globals.currentUser.username : false;
    }

    onEdit(query) {
        this.adsService.updateAd(query).then((res) => {
            if (res.status === 200) {
                this.alert = { title: 'Success!', content: '', type: 'success' };
            } else {
                this.alert = { title: 'Error!', content: 'Cannot connect to server', type: 'success' };
            }
        });
    }

    onDelete(id) {
        this.adsService.deleteAd(id).then((res) => {
            this.fetchAds();
        });
    }
}
