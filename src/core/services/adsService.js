export class AdsService {
  /* @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  getAds() {
    return this.$http.get('http://localhost:3000/ads').then((response) => response.data);
  }

  updateAd(query) {
    this.$http.put(`http://localhost:3000/ads/${query.id}`, query);
  }

  deleteAd(id) {
    this.$http.delete(`http://localhost:3000/ads/${id}`);
  }
}
