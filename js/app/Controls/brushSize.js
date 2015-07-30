define(function (require) {
  var elt = require('../Helpers/element');

  return function (cx) {
    var select = elt("select");
    var sizes = [1, 2, 3, 5, 8, 12, 25, 35, 50, 75, 100];
    sizes.forEach(function (size) {
      select.appendChild(elt("option", {value: size},
        size + " pixels"));
    });
    select.addEventListener("change", function () {
      cx.lineWidth = select.value;
    });
    return elt("span", null, "Brush size: ", select);
  };
});