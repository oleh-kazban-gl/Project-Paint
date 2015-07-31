/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function (require) {
  'use strict';

  var relativePos = require('../Helpers/relativePos');
  var colorAtPoint = require('../Helpers/colorAtPoint');
  var rgb2Hex = require('../Helpers/rgb2Hex');

  return function (event, context) {
    var position = relativePos(event, context.canvas);
    console.log(position.x, position.y);
    var color = colorAtPoint(context, position.x, position.y);
    console.log(color);
    var colorHex = rgb2Hex(color);
    console.log(colorHex);


  }
});


