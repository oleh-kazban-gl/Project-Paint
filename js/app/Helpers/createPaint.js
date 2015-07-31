/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function (require) {
  'use strict';

  var controls = require('../Controls');
  var element = require('./element');

  return function (parent) {
    var canvas = element('canvas', {width: 500, height: 300});
    var cx = canvas.getContext('2d');
    var toolbar = element('div', {class: 'toolbar'});

    for (var name in controls) {
      toolbar.appendChild(controls[name](cx));
    }

    var panel = element('div', {class: 'picturepanel'}, canvas);
    parent.appendChild(element('div', null, panel, toolbar));
  }

});