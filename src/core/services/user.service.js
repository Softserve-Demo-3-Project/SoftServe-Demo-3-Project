export  class UserService {
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

    register(name, age, email, username, password) {
        return this.$http({
            method: 'POST',
            url: 'http://localhost:3000/users',
            params: {
                name: name,
                age: age,
                email: email,
                username: username,
                password: password
            }
        }).success(function(data) {
            $window.location.href('/');
        });
    }
}
