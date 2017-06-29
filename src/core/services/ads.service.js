export class adsService {
  /* @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  getSort(type, price) {
    var typeQuery = type;
    var priceQuery = price;

    if (type && type !== 'all') {
      typeQuery = `type=${type}`;
    }
    if (price) {
      priceQuery = `price=${price}`;
    }

    return this.$http.get(`http://localhost:3000/ads?${typeQuery}&${priceQuery}`)
      .then((res) => res)
      .catch((err) => err);
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

  postAd(body) {
    return this.$http.post('http://localhost:3000/ads', body);
  }
}
