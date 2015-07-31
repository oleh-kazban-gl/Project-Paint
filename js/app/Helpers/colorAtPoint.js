/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function () {
  'use strict';

  return function (context, x, y) {
    return context.getImageData(x, y, 1, 1).data;
  }
});