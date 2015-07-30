define(function (require) {
  var element = require('../Helpers/element');
  var tools = require('../Tools');

  return function (context) {
    var select = element('select');
    for (var name in tools) {
      select.appendChild(element('option', null, name));
    }

    context.canvas.addEventListener('mousedown', function (event) {
      if (event.which == 1) {
        tools[select.value](event, context);
        event.preventDefault();
      }
    });

    return element('span', null, 'Tool: ', select);
  };
});


