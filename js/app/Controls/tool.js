define(function (require) {
  var elt = require('../Helpers/element');
  var tools = require('../Tools');

  return function (cx) {
    var select = elt("select");
    for (var name in tools)
      select.appendChild(elt("option", null, name));

    cx.canvas.addEventListener("mousedown", function (event) {
      if (event.which == 1) {
        tools[select.value](event, cx);
        event.preventDefault();
      }
    });

    return elt("span", null, "Tool: ", select);
  };
});


