export default class MapDirectiveController {
    constructor($scope, mapService) {
        mapService.loadScript()
        .then(() => {
            // console.log();
            mapService.initialize($scope.ads);

        });
    }
}
