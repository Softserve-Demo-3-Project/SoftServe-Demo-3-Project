export default class HomeController {
    constructor(AdsService) {
       this.test = AdsService.getAds();
       console.log(this.test);
    }
}