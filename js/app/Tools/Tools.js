define(function (require) {
  var Erase = require('./Erase');
  var Line = require('./Line');
  var Rectangle = require('./Rectangle');
  var Spray = require('./Spray');
  var Text = require('./Text');

  var tools = Object.create(null);

  tools.Erase = Erase;
  tools.Line = Line;
  tools.Rectangle = Rectangle;
  tools.Spray = Spray;
  tools.Text = Text;

  return tools;
});

