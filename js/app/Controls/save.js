define(function (require) {
  var elt = require('../Helpers/element');

  return function (cx) {
    var link = elt("a", {href: "/"}, "Save");

    function update() {
      try {
        link.href = cx.canvas.toDataURL();
      } catch (e) {
        if (e instanceof SecurityError)
          link.href = "javascript:alert(" +
            JSON.stringify("Can't save: " + e.toString()) + ")";
        else
          throw e;
      }
    }

    link.addEventListener("mouseover", update);
    link.addEventListener("focus", update);
    return link;
  };
});


