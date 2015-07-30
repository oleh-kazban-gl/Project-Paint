define(function (require) {
  var element = require('../Helpers/element');

  return function (context) {
    var input = element('input', {type: 'color', id: 'color'});

    input.addEventListener('change', function () {
      context.fillStyle = input.value;
      context.strokeStyle = input.value;
    });

    return element('span', null, 'Color: ', input);
  };
});