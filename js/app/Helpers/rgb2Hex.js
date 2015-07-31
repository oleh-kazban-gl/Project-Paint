/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function () {
  'use strict';

  return function (r, g, b) {
    var red = toHex(r);
    var green = toHex(g);
    var blue = toHex(b);

    return '#' + red + green + blue;
  }
});

function toHex(string) {
  var hexValue = string.toString(16);
  return (hexValue.length == 1) ? '0' + hexValue : hexValue;
}