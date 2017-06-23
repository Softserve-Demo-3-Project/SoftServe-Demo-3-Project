export class AdsService {
  /* @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  getAds() {
    return this.$http.get('http://localhost:3000/ads')
    .then((res) => res)
    .catch((err) => err);
  }

  updateAd(query) {
    return this.$http.put(`http://localhost:3000/ads/${query.id}`, query);
  }

  deleteAd(id) {
     return this.$http.delete(`http://localhost:3000/ads/${id}`);
  }
}
