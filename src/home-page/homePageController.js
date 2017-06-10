import advertisementFactory from './advertisementFactory';

export default class homePageController {
    constructor($scope, $http, advertisementFactory) {

        $http({
            url: "http://localhost:3000/adverisments",
            method: "GET"
            // data: {
            //     "id": 4,
            //     "author": "iva",
            //     "title": "some3 title",
            //     "description": "some3 description",
            //     "picture": "some3 picture",
            //     "location": "some3 location",
            //     "contacts": "some3 contacts",
            //     "prise": 333,
            //     "type": "some3 type",
            //     "authurRole": "some3 role"
            // }
        }).then(function successCallback(response) {
            console.log(response);
    
        }, function errorCallback(response) {
            console.log(response);
        });

        var obj = {
            author: 'ivo',
            title: 'some titel',
            description: 'some description',
            picture: 'some img',
            location: 'location',
            contacts: 'some contacts',
            prise: 22,
            type: 'some type',
            authurRole: 'admin'
        }


        var s = advertisementFactory.create(obj);
        console.log(s);

        $scope.page = "Home";
        $scope.users = [
            { name: 'Voltron' }, { name: 'Piglet' }, { name: 'Martin' }, { name: 'Denis' }
        ];

    }
}