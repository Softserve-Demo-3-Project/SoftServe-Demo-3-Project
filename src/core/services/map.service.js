export class mapService {
    constructor($window, $q) {

        function initialize(ads) {

            var cities = ads
                .filter(ad => ad.locationLat && ad.locationLng)
                .map((ad) => ({ lat: ad.locationLat, long: ad.locationLng }));

            var mapOptions = {
                zoom: 7,
                center: new google.maps.LatLng(42.1500000, 24.7500000)
                // center: new google.maps.LatLng(cities[0] && cities[0].lat, cities[0] && cities[0].long)
            };

            var map = new google.maps.Map(document.getElementById('gmap'), mapOptions);

            var createMarker = function (info, map) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(info.lat, info.long),
                    map: map
                });
            }

            for (let i = 0; i < cities.length; i++) {
                createMarker(cities[i], map);
            }
        }

        return {
            initialize
        }
    }
}
