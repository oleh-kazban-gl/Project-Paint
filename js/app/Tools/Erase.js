define(function (require) {
  var relativePos = require('../Helpers/relativePos');
  var trackDrag = require('../Helpers/trackDrag');

  return function (event, context) {
    context.lineCap = "round";
    context.globalCompositeOperation = "destination-out";

    var pos = relativePos(event, context.canvas);
    trackDrag(function (event) {
      context.beginPath();
      context.moveTo(pos.x, pos.y);
      pos = relativePos(event, context.canvas);
      context.lineTo(pos.x, pos.y);
      context.stroke();
    }, function () {
      context.globalCompositeOperation = "source-over";
    });
  };

});