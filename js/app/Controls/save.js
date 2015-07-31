/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function (require) {
  'use strict';

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