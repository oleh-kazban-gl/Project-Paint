/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function () {
  'use strict';

  return function (name, attributes) {
    var node = document.createElement(name);
    if (attributes) {
      for (var attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
          node.setAttribute(attr, attributes[attr]);
        }
      }
    }

    for (var i = 2; i < arguments.length; i++) {
      var child = arguments[i];

      if (typeof child == 'string') {
        child = document.createTextNode(child);
      }

      node.appendChild(child);
    }

    return node;
  };
});