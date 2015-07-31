/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function (require) {
  'use strict';

  var element = require('../Helpers/element');
  var tools = require('../Tools');

  return function (context) {
    var select = element('select');
    for (var name in tools) {
      select.appendChild(element('option', null, name));
    }

    context.canvas.addEventListener('mousedown', function (event) {
      if (event.which == 1) {
        tools[select.value](event, context);
        event.preventDefault();
      }
    });

    return element('span', null, 'Tool: ', select);
  };
});