/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function () {
  'use strict';
  
  return function (context, url) {
    var image = document.createElement('img');

    image.addEventListener('load', function () {
      var color = context.fillStyle, size = context.lineWidth;
      context.canvas.width = image.width;
      context.canvas.height = image.height;
      context.drawImage(image, 0, 0);
      context.fillStyle = color;
      context.strokeStyle = color;
      context.lineWidth = size;
    });

    image.src = url;
  };
});