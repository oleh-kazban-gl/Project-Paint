define(function (require) {
  var ColorPicker = require('./Tools/ColorPicker');
  var Erase = require('./Tools/Erase');
  var Line = require('./Tools/Line');
  var Rectangle = require('./Tools/Rectangle');
  var Spray = require('./Tools/Spray');
  var Text = require('./Tools/Text');

  var tools = Object.create(null);

  tools['Color Picker'] = ColorPicker;
  tools.Erase = Erase;
  tools.Line = Line;
  tools.Rectangle = Rectangle;
  tools.Spray = Spray;
  tools.Text = Text;

  return tools;

});

