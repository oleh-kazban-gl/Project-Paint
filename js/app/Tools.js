/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function (require) {
  'use strict';

  var ColorPicker = require('./Tools/ColorPicker');
  var Erase = require('./Tools/Erase');
  var FloodFill = require('./Tools/FloodFill');
  var Line = require('./Tools/Line');
  var Rectangle = require('./Tools/Rectangle');
  var Spray = require('./Tools/Spray');
  var Text = require('./Tools/Text');

  var tools = Object.create(null);

  tools['Color Picker'] = ColorPicker;
  tools.Erase = Erase;
  tools['Flood Fill'] = FloodFill;
  tools.Line = Line;
  tools.Rectangle = Rectangle;
  tools.Spray = Spray;
  tools.Text = Text;

  return tools;
});