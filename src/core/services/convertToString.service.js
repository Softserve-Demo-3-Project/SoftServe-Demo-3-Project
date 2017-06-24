export class convertToString {
  // @ngInject
  constructor() {

    function readAsURL(input) {
      return new Promise((resolve, reject) => {

        var fReader = new FileReader();
        fReader.onload = function() {
          var response = fReader.result;

          resolve(response);
        };
        fReader.readAsDataURL(input);
      })
    }

    return {readAsURL}

  }
}
