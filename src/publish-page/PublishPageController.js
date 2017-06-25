export default class PublishPageController {
  constructor($scope, $http, $location, options, convertToString, adsService) {

    $scope.options = options;

    function loadAutoComplate(element) {
      var inputFrom = document.getElementById('location');

      var autocompleteFrom = new google.maps.places.Autocomplete(inputFrom);

      google.maps.event.addListener(autocompleteFrom, 'place_changed', function() {
        var place = autocompleteFrom.getPlace();
        $scope.user.locationLat = place.geometry.location.lat();
        $scope.user.locationLng = place.geometry.location.lng();
        $scope.user.address = place.formatted_address;
        $scope.$apply();
      });
    }

    loadAutoComplate();

    $scope.sendData = function(data) {
      convertToString.readAsURL(data.image).then((res) => {
        data.image = res;
        adsService.postAd(data)
        .then(() => {
          $location.path('#/home');
          });

        });
      }}
  }
