/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function (require) {
  'use strict';

  var trackDrag = require('../Helpers/trackDrag');
  var relativePos = require('../Helpers/relativePos');
  var randomPointInRadius = require('../Helpers/randomPointInRadius');

  return function (event, context) {
    var radius = context.lineWidth / 2;
    var area = radius * radius * Math.PI;
    var dotsPerTick = Math.ceil(area / 30);

    var currentPos = relativePos(event, context.canvas);
    var spray = setInterval(function () {
      for (var i = 0; i < dotsPerTick; i++) {
        var offset = randomPointInRadius(radius);
        context.fillRect(currentPos.x + offset.x,
          currentPos.y + offset.y, 1, 1);
      }
    }, 25);

    trackDrag(function (event) {
      currentPos = relativePos(event, context.canvas);
    }, function () {
      clearInterval(spray);
    });
  };
});