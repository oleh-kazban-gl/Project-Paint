define(function (require) {
  var Erase = require('./Tools/Erase');
  var Line = require('./Tools/Line');
  var Rectangle = require('./Tools/Rectangle');
  var Spray = require('./Tools/Spray');
  var Text = require('./Tools/Text');

  var tools = Object.create(null);

  tools.Erase = Erase;
  tools.Line = Line;
  tools.Rectangle = Rectangle;
  tools.Spray = Spray;
  tools.Text = Text;

  return tools;
});

