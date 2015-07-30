define(function (require) {
  var elt = require('../Helpers/element');

  return function (cx) {
    var input = elt("input", {type: "text"});
    var form = elt("form", null,
      "Open URL: ", input,
      elt("button", {type: "submit"}, "load"));
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      loadImageURL(cx, input.value);
    });
    return form;
  };
});