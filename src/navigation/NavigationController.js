export default class NavigationController {
    constructor() {
        // sessionStorage.setItem('currentUsername', 'Gosho');

        this.userName = sessionStorage.getItem('currentUsername') || 'No current user';
    }
}