export class mapService {
    /* @ngInject */
    constructor($window, $q) {

        function loadScript() {

            var deferred = $q.defer();

            function load() {

                var key = 'AIzaSyBQX5028KFM6LIkKepvRme8HTu0-etasO0';
                var script = document.createElement('script');
                script.src = `//maps.googleapis.com/maps/api/js?key=${key}&callback=initMap&libraries=places`;

                document.body.appendChild(script);
            }
            $window.initMap = function () {
                deferred.resolve();
            }

            load();

            return deferred.promise;
        }

        function initialize(ads) {

            var cities = ads
                .filter(ad => ad.locationLat && ad.locationLng)
                .map((ad) => ({ lat: ad.locationLat, long: ad.locationLng }));

            // var coordinate = [{}];

            var mapOptions = {
                zoom: 4,
                // center: new google.maps.LatLng(cities[0].lat, cities[0].long)
                center: new google.maps.LatLng(cities[0] && cities[0].lat, cities[0] && cities[0].long)
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
            loadScript,
            initialize
        }
    }
}
