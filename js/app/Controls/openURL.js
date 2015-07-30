define(function (require) {
  var element = require('../Helpers/element');

  return function (context) {
    var input = element('input', {type: 'text'});
    var form = element('form', null,
      'Open URL: ', input,
      element('button', {type: 'submit'}, 'load'));
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      loadImageURL(context, input.value);
    });
    return form;
  };
});