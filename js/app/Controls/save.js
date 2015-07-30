define(function (require) {
  var elt = require('../Helpers/element');

  return function (context) {
    var link = elt('a', {href: '/'}, 'Save');

    function update() {
      try {
        link.href = context.canvas.toDataURL();
      } catch (error) {
        if (error instanceof SecurityError)
          link.href = 'javascript:alert(' +
            JSON.stringify('Can\'t save: ' + e.toString()) + ')';
        else
          throw error;
      }
    }

    link.addEventListener('mouseover', update);
    link.addEventListener('focus', update);

    return link;
  };
});


