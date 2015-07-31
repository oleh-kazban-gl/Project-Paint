/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function (require) {
  'use strict';

  var relativePos = require('../Helpers/relativePos');
  var color = require('../Controls/color');
  var colorAtPoint = require('../Helpers/colorAtPoint');
  var rgb2Hex = require('../Helpers/rgb2Hex');

  return function (event, context) {
    var position = relativePos(event, context.canvas);

    try {
      var data = colorAtPoint(context, position.x, position.y);
    } catch (error) {
      alert(JSON.stringify(error.toString()));
      return;
    }

    var colorTool = document.getElementById('color');

    context.fillStyle = rgb2Hex(data);
    colorTool.value = rgb2Hex(data);
  };
});