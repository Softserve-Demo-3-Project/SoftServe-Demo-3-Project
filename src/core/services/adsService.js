export class AdsService {
    constructor($http){
    'ngInject';
        
        this.$http = $http;
    }

    getAds() {
        return this.$http.get('http://localhost:3000/advertisements').then((response) => response.data);
    }
}