export class UserService {
    constructor($http){
        this.$http = $http;
    }

    login(username, password) {
        return this.$http({
        	method: 'GET',
        	url: 'http://localhost:3000/users',
		    params: {
		    	username: username,
		    	password: password
		    }
        });
    }
}