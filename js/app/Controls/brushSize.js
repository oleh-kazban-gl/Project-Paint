/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function (require) {
  'use strict';

  var element = require('../Helpers/element');

  return function (context) {
    var select = element('select');
    var sizes = [1, 2, 3, 5, 8, 12, 25, 35, 50, 75, 100];

    sizes.forEach(function (size) {
      select.appendChild(element('option', {value: size},
        size + ' pixels'));
    });

    select.addEventListener('change', function () {
      context.lineWidth = select.value;
    });

    return element('span', null, 'Brush size: ', select);
  };
});