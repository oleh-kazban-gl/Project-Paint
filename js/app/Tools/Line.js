define(function (require) {
  var relativePos = require('../Helpers/relativePos');
  var trackDrag = require('../Helpers/trackDrag');

  return function (event, context, onEnd) {
    context.lineCap = "round";

    var pos = relativePos(event, context.canvas);
    trackDrag(function (event) {
      context.beginPath();
      context.moveTo(pos.x, pos.y);
      pos = relativePos(event, context.canvas);
      context.lineTo(pos.x, pos.y);
      context.stroke();
    }, onEnd);
  };
});