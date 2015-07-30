define(function (require) {
  var relativePos = require('../Helpers/relativePos');
  var trackDrag = require('../Helpers/trackDrag');

  return function (event, cx, onEnd) {
    cx.lineCap = "round";

    var pos = relativePos(event, cx.canvas);
    trackDrag(function (event) {
      cx.beginPath();
      cx.moveTo(pos.x, pos.y);
      pos = relativePos(event, cx.canvas);
      cx.lineTo(pos.x, pos.y);
      cx.stroke();
    }, onEnd);
  };
});