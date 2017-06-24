export default class PublishPageController {
  constructor($scope, options, mapService) {

    $scope.page = "Publish";
    $scope.options = options;
    var el = 'location';

    function initialize() {
      var address = (document.getElementById('location'));

      $scope.autocomplete = new google.maps.places.Autocomplete(address);
      autocomplete.setTypes(['geocode']);

      google.maps.event.addListener(autocomplete, 'place_changed', function() {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
          return;
        }

        var address = '';
        if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
        }
        // document.getElementById('lat').innerHTML = place.geometry.location.lat();
        // document.getElementById('lng').innerHTML = place.geometry.location.lng();
      });
    }

    // google.maps.event.addDomListener(window, 'load', initialize);

    function some(element) {
      $scope.user = {
        'from': '',
        'fromLat': '',
        'fromLng': ''
      };
      var options = {
        componentRestrictions: {
          country: "in"
        }
      };
      var inputFrom = document.getElementById(element);

      var autocompleteFrom = new google.maps.places.Autocomplete(inputFrom, options);

      google.maps.event.addListener(autocompleteFrom, 'place_changed', function() {
        var place = autocompleteFrom.getPlace();
        $scope.user.fromLat = place.geometry.location.lat();
        $scope.user.fromLng = place.geometry.location.lng();
        $scope.user.from = place.formatted_address;
        $scope.$apply();
      });
    }

    mapService.loadScript().than(() => {
      some(el);
    });
  }
}
