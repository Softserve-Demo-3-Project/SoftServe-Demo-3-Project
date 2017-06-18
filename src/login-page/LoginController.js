
export default class LoginController {
    constructor(userService){
    	this.userService=userService;
        this.init();
    }
}

LoginController.prototype.init = function () {
	this.username = "";
	this.password = "";
	this.rememberMe = false;
	this.hasFailed = false;
	this.hasLoggedIn = false;
}

LoginController.prototype.submit = function () {
	let _this = this;
	this.hasFailed = false;
	this.hasLoggedIn = false;

	this.userService.login(this.username, this.password).then(function(response) {
		let data = response.data;

		if (data.length) {
			let user = data[0];
			_this.hasLoggedIn = true;
			//TODO login success
		} else {
			_this.hasFailed = true;
		}
	});
}