/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 * @param(color) - array [red, green, blue, alpha]
 * @return(array) - array [red, green, blue]
 */

define(function () {
  'use strict';

  return function (color) {
    var red, green, blue, alpha;
    alpha = color[3];

    //If picture is transparent set color to white
    if (alpha === 0) {
      color[0] = 255;
      color[1] = 255;
      color[2] = 255;
    }

    red = color[0];
    green = color[1];
    blue = color[2];

    return [red, green, blue];
  }
});