export class convertToString {
  // @ngInject
  constructor() {

    function readAsURL(input) {
      return new Promise((resolve, reject) => {

        if (input) {
          var fReader = new FileReader();
          fReader.onload = function () {
            var response = fReader.result;

            resolve(response);
          };
          fReader.readAsDataURL(input);
        } else {
          resolve();
        }
      });
    }

    return { readAsURL };
  }
}
