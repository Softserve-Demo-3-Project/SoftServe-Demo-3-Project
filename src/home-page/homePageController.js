import advertisementFactory from './advertisementFactory';

export default class homePageController {
    constructor($scope, advertisementFactory) {

        var obj = {
            author: 'ivo',
            title: 'some titel',
            description: 'some description',
            picture: 'some img',
            location: 'location',
            contacts: 'some contacts',
            prise: 22,
            type: 'some type'
        }


var s = advertisementFactory;
console.log(s);

        $scope.page = "Home";
        $scope.users = [
            { name: 'Voltron' }, { name: 'Piglet' }, { name: 'Martin' }, { name: 'Denis' }
        ];

    }
}