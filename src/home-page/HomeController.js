export default class HomeController {
    /* @ngInject */
    constructor(adsService, authenticationService, $rootScope, $cookies, $location, $http, mapService) {
        this.ads = [];
        this.alert = {};
        this.adsService = adsService;
        this.mapService = mapService;
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

    searchByType(type, price) {
        if (type === 'all') {
            this.adsService.getAds().then((res) => {
                this.ads = res.data;
            }).then(() => {
                this.mapService.initialize(this.ads);
            });
        } else {
            this.adsService.getSort(type, price).then((res) => {
                this.ads = res.data;
            }).then(() => {
                this.mapService.initialize(this.ads);
            });
        }
    }

    checkForUser() {
        this.$cookies.getObject('globals') ? this.$location.path('/publish') : this.$location.path('/login');
    }

    fetchAds() {
        this.adsService.getAds().then((res) => {
            this.ads = res.data;
        }).then(() => {
            this.mapService.initialize(this.ads);
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
