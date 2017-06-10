import homePageUtils from './homePageUtils';

export default function advertisementFactory() {

    function Advertisement(author, title, description, picture, location, contacts, prise, type, authurRole) {
        this._author = author,
            this._title = title,
            this._description = description,
            this._picture = picture,
            this._location = location,
            this._contacts = contacts,
            this._prise = prise,
            this._type = type,
            this._authurRole = authurRole,
            this._id = 3
            // this._id = idGenerator.next();
    }

    Advertisement.prototype.read = function () {
        return {
            author: this._author,
            title: this._title,
            description: this._description,
            picture: this._picture,
            location: this._location,
            contacts: this._contacts,
            prise: this._prise,
            type: this._type,
            id: this._id
        }
    }

    function create(data) {
        // Optional
        if (data.authurRole !== 'admin') {
            return;
        }

        return new Advertisement(
            data.author,
            data.title,
            data.description,
            data.picture,
            data.location,
            data.contacts,
            data.prise,
            data.type,
            data.authurRole
        )
    }


    // class Advertisement {
    //     constructor(author, title, description, picture, location, contacts, prise, type, authurRole) {
    //         this._author = author,
    //             this._title = title,
    //             this._description = description,
    //             this._picture = picture,
    //             this._location = location,
    //             this._contacts = contacts,
    //             this._prise = prise,
    //             this._type = type,
    //             this._authurRole = authurRole,
    //             this._id = idGenerator.next();
    //     }

    //     read() {
    //         return {
    //             author: this._author,
    //             title: this._title,
    //             description: this._description,
    //             picture: this._picture,
    //             location: this._location,
    //             contacts: this._contacts,
    //             prise: this._prise,
    //             type: this._type,
    //             id: this._id
    //         }
    //     }
    // }

    // function create(data) {
    //     // Optional
    //     if (data.authurRole !== 'admin') {
    //         return;
    //     }

    //     console.log(data);
    //     return new Advertisement(
    //         data.author,
    //         data.title,
    //         data.description,
    //         data.picture,
    //         data.location,
    //         data.contacts,
    //         data.prise,
    //         data.type,
    //         data.authurRole
    //     )
    // }

    return {
        create: create
    }
}

