define(function (require) {
  var elt = require('../Helpers/element');

  return function (cx) {
    var input = elt("input", {type: "color"});
    input.addEventListener("change", function () {
      cx.fillStyle = input.value;
      cx.strokeStyle = input.value;
    });
    return elt("span", null, "Color: ", input);
  };
});