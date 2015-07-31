/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function (require) {
  'use strict';

  var brushSize = require('./Controls/brushSize');
  var color = require('./Controls/color');
  var openFile = require('./Controls/openFile');
  var openURL = require('./Controls/openURL');
  var save = require('./Controls/save');
  var tool = require('./Controls/tool');

  var controls = Object.create(null);

  controls.brushSize = brushSize;
  controls.color = color;
  controls.openFile = openFile;
  controls.openURL = openURL;
  controls.save = save;
  controls.tool = tool;

  return controls;
});