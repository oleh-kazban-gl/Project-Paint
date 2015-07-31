/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 * @param(color) - array [red, green, blue]
 */

define(function () {
  'use strict';

  var readColor = require('./readColor');

  return function (color) {
    color = readColor(color);

    return 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
  }
});