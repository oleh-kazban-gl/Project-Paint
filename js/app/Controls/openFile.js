define(function (require) {
  var elt = require('../Helpers/element');

  return function (cx) {
    var input = elt("input", {type: "file"});
    input.addEventListener("change", function () {
      if (input.files.length == 0) return;
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        loadImageURL(cx, reader.result);
      });
      reader.readAsDataURL(input.files[0]);
    });
    return elt("div", null, "Open file: ", input);
  };
});