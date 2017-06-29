export class mapService {
  constructor($window, $q) {
    this.$q = $q;
    this.$window = $window;
  }

  initialize(ads) {
    var cities = ads
      .filter(ad => ad.locationLat && ad.locationLng)
      .map((ad) => ({
        lat: ad.locationLat,
        long: ad.locationLng
      }));

    var description = ads
      .filter(ad => ad.address && ad.title)
      .map((ad) => ({
        address: ad.address,
        title: ad.title
      }));

    var mapOptions = {
      zoom: 7,
      center: new google.maps.LatLng(42.1500000, 25.4500000)
    };

    var map = new google.maps.Map(document.getElementById('gmap'), mapOptions);
    var infoWindow = new google.maps.InfoWindow();
    var createMarker = function (info, des, map) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(info.lat, info.long),
        map: map
      });

      google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent('<h4>' + des.title + '</h4>' + '<br />' +
          '<div>' + 'Address:' + des.address + '</div>');
        infoWindow.open(map, marker);
      });
    }

    for (let i = 0; i < cities.length; i++) {
      createMarker(cities[i], description[i], map);
    }
  }
}
