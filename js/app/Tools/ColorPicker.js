define(function (require) {
  var relativePos = require('../Helpers/relativePos');
  var color = require('../Controls/color');

  return function (event, context) {
    var position = relativePos(event, context.canvas);
    var data = colorAtPoint(context, position.x, position.y);
    var colorStyle = 'rgb(' + data[0] + ',' + data[1] + ',' + data[2] + ')';
    var colorTool = document.getElementById('color');

    context.fillStyle = colorStyle;
    colorTool.value = rgb2Hex(data[0], data[1], data[2]);
  };
});

function colorAtPoint(context, x, y) {
  return context.getImageData(x, y, 1, 1).data;
}

function toHex(string) {
  var hexValue = string.toString(16);
  return (hexValue.length == 1) ? '0' + hexValue : hexValue;
}

function rgb2Hex(r, g, b) {
  var red = toHex(r);
  var green = toHex(g);
  var blue = toHex(b);

  return '#' + red + green + blue;
}