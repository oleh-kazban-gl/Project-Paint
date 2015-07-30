define(function (require) {
  var element = require('../Helpers/element');

  return function (context) {
    var input = element('input', {type: 'file'});

    input.addEventListener('change', function () {
      if (input.files.length == 0) return;
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        loadImageURL(context, reader.result);
      });
      reader.readAsDataURL(input.files[0]);
    });

    return element('div', null, 'Open file: ', input);
  };
});