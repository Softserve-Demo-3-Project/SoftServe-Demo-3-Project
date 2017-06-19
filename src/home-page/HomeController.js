
export default class HomeController {
    constructor() {
        'ngInject';
        this.ads = [
            {
                id: 1,
                author: 'gosho1',
                title: 'some1 title',
                dateOfPublish: 'date',
                description: 'some1 description',
                guests: 3,
                bed: 2,
                location: 'some1 location',
                contacts: 'some1 contacts',
                price: 11,
                type: 'some1 type',
                book: {}
            },
            {
                id: 2,
                author: 'toncho2',
                title: 'some2 title',
                dateOfPublish: 'date',
                description: 'some2 description',
                guests: 3,
                bed: 2,
                location: 'some2 location',
                contacts: 'some2 contacts',
                price: 12,
                type: 'some2 type',
                book: {}
            }
        ];
    }


}
