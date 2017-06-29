export default function mapLoad($parse) {
  return {
    restrict: 'E',
    link: function () {
      var key = 'AIzaSyBQX5028KFM6LIkKepvRme8HTu0-etasO0';
      var script = document.createElement('script');
      script.src = `//maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;

      document.body.appendChild(script);
    }
  }
}
