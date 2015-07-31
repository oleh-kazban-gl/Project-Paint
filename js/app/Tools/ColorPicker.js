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

    //If picture is transparent set color to white
    if (data[3] === 0) {
      data[0] = 255;
      data[1] = 255;
      data[2] = 255;
    }

    var colorStyle = 'rgb(' + data[0] + ',' + data[1] + ',' + data[2] + ')';
    var colorTool = document.getElementById('color');

    context.fillStyle = colorStyle;
    colorTool.value = rgb2Hex(data[0], data[1], data[2]);
  };
});