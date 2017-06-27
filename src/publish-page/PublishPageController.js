export default class PublishPageController {
  constructor($scope, $location, options, convertToString, adsService, mapService, authenticationService) {
    this.authenticationService = authenticationService;
    this.mapService = mapService
    this.adsService = adsService;
    this.convertToString = convertToString;
    this.options = options;
    this.$scope = $scope;
    this.$location = $location;
    this.user = {};

    this.loadAutoComplate();
  }

  sendData(data) {
    this.convertToString.readAsURL(data.picture).then((res) => {
      let userId = this.authenticationService.getCurrentUserId();
      data.picture = res;
      data.authorId = userId;

      this.adsService.postAd(data).then(() => {
        this.$location.path('#/home');
      });
    });
  }

  loadAutoComplate(element) {
    let self = this;
    let inputFrom = document.getElementById('location');
    let autocompleteFrom = new google.maps.places.Autocomplete(inputFrom);

    var options = {
      componentRestrictions: {
        country: 'BG'
      }
    };


    google.maps.event.addListener(autocompleteFrom, options, 'place_changed', function () {
      var place = autocompleteFrom.getPlace();
      self.user.locationLat = place.geometry.location.lat();
      self.user.locationLng = place.geometry.location.lng();
      self.user.address = place.formatted_address;
      self.$scope.$apply();
    });
  }
}
