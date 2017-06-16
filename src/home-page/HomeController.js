export default class HomeController {
    constructor(AdsService) {
        this.testString = 'Home works!!!';

        this.test = AdsService.getAds();
        console.log(this.test);
    }
}