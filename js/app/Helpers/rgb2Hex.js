/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 * @param(color) - array [red, green, blue, alpha]
 */

define(function () {
  'use strict';

  return function (color) {

    var red = toHex(color[0]);
    var green = toHex(color[1]);
    var blue = toHex(color[2]);

    return '#' + red + green + blue;
  }
});

function toHex(string) {
  var hexValue = string.toString(16);
  return (hexValue.length == 1) ? '0' + hexValue : hexValue;
}