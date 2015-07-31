/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function (require) {
  'use strict';

  var relativePos = require('../Helpers/relativePos');
  var trackDrag = require('../Helpers/trackDrag');

  return function (event, context, onEnd) {
    context.lineCap = 'round';

    var pos = relativePos(event, context.canvas);
    trackDrag(function (event) {
      context.beginPath();
      context.moveTo(pos.x, pos.y);
      pos = relativePos(event, context.canvas);
      context.lineTo(pos.x, pos.y);
      context.stroke();
    }, onEnd);
  };
});