define(function (require) {
  var element = require('../Helpers/element');

  return function (context) {
    var select = element('select');
    var sizes = [1, 2, 3, 5, 8, 12, 25, 35, 50, 75, 100];

    sizes.forEach(function (size) {
      select.appendChild(element('option', {value: size},
        size + ' pixels'));
    });

    select.addEventListener('change', function () {
      context.lineWidth = select.value;
    });

    return element('span', null, 'Brush size: ', select);
  };
});