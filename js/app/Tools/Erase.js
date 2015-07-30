define(function (require) {
  var relativePos = require('../Helpers/relativePos');
  var trackDrag = require('../Helpers/trackDrag');

  return function (event, cx) {
    cx.lineCap = "round";
    cx.globalCompositeOperation = "destination-out";

    var pos = relativePos(event, cx.canvas);
    trackDrag(function (event) {
      cx.beginPath();
      cx.moveTo(pos.x, pos.y);
      pos = relativePos(event, cx.canvas);
      cx.lineTo(pos.x, pos.y);
      cx.stroke();
    }, function () {
      cx.globalCompositeOperation = "source-over";
    });
  };

});