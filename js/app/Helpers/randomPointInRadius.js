/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function () {
  'use strict';

  return function (radius) {
    for (; ;) {
      var x = Math.random() * 2 - 1;
      var y = Math.random() * 2 - 1;

      if (x * x + y * y <= 1) {
        return {x: x * radius, y: y * radius};
      }
    }
  };
});