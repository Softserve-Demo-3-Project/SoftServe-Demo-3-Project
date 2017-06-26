export default class HomeController {
    /* @ngInject */
    constructor(adsService, authenticationService, $rootScope, $cookies, $location, $http) {
        this.ads = [];
        this.alert = {};
        this.adsService = adsService;
        this.authenticationService = authenticationService;
        this.fetchAds = this.fetchAds.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.fetchAds();
        this.types = ['all', '1 Room', '2 Room', '3 Room', 'House'];
        this.$cookies = $cookies;
        this.$location = $location;
        this.$http = $http;
    }

    searchByType(type) {

        if (type === 'all') {
            this.adsService.getAds().then((res) => {
                this.ads = res.data;
            });
        } else {
            this.adsService.getByType(type).then((res) => {
                this.ads = res.data;
            });
        }
    }

    checkForUser() {
        // this.$cookies.getObject('globals') ? this.$location.path('/publish') : this.$location.path('/login');
        this.$location.path('/publish')
    }

    fetchAds() {
        this.adsService.getAds().then((res) => {
            this.ads = res.data;
        });
    }

    isLoggedIn() {
        return this.authenticationService.getCurrentUserId();
    }

    onEdit(query) {
        this.adsService.updateAd(query).then((res) => {
            if (res.status === 200) {
                this.alert = { title: 'Success!', content: '', type: 'success' };
            } else {
                this.alert = { title: 'Error!', content: 'Cannot connect to server', type: 'danger' };
            }
        });
    }

    onDelete(id) {
        this.adsService.deleteAd(id).then((res) => {
            this.fetchAds();
        });
    }
}
