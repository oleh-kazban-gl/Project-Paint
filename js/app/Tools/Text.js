/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function (require) {
  'use strict';

  var relativePos = require('../Helpers/relativePos');

  return function (event, context) {
    var text = prompt('Text:', '');
    if (text) {
      var pos = relativePos(event, context.canvas);
      context.font = Math.max(7, context.lineWidth) + 'px sans-serif';
      context.fillText(text, pos.x, pos.y);
    }
  };
});