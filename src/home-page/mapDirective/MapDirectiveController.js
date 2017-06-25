export default class MapDirectiveController {
    constructor($scope, mapService) {

        // Get coordinate

console.log($scope);

// console.log($scope.ads);

        // Load map
        mapService.loadScript()
        .then(() => {
            // console.log();
            mapService.initialize();

        })


    }
}