export class AdsService {
    constructor($http){
        this.$http = $http;
    }

    getAds() {
        return this.$http.get('http://localhost:3000/advertisements').then((response) => response.data);
    }
}