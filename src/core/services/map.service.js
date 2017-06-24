export class mapService {
    /* @ngInject */
    constructor($window, $q) {

        function loadScript() {

            var deferred = $q.defer();

            // Load Google map API script
            function load() {

                var key = 'AIzaSyBQX5028KFM6LIkKepvRme8HTu0-etasO0';
                // Use global document since Angular's $document is weak
                var script = document.createElement('script');
                script.src = '//maps.googleapis.com/maps/api/js?key=AIzaSyBQX5028KFM6LIkKepvRme8HTu0-etasO0&callback=initMap&libraries=places';

                document.body.appendChild(script);
            }
console.log(22);

            // Script loaded callback, send resolve
            $window.initMap = function () {
                deferred.resolve();
            }

            load();

            return deferred.promise;
        }

        function initialize() {

            var coordinate = [{}];

            var location = new google.maps.LatLng("48.833", "2.333");

            var mapOptions = {
                zoom: 12,
                center: location
            };

            var map = new google.maps.Map(document.getElementById('gmap'), mapOptions);

            new google.maps.Marker({
                position: location,
                map: map
            });

        }

        function autocoplate() {

            var auto = new google.maps.places.Autocomplete();
            auto.setTypes(['geocode'])

        }

        return {
            loadScript,
            initialize,
            autocoplate
        }

    }

}