/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function (require) {
  'use strict';

  var element = require('../Helpers/element');

  return function (context) {
    var input = element('input', {type: 'color', id: 'color'});

    input.addEventListener('change', function () {
      context.fillStyle = input.value;
      context.strokeStyle = input.value;
    });

    return element('span', null, 'Color: ', input);
  };
});