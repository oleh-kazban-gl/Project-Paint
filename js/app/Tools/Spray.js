define(function (require) {
  var trackDrag = require('../Helpers/trackDrag');
  var relativePos = require('../Helpers/relativePos');
  var randomPointInRadius = require('../Helpers/randomPointInRadius');

  return function (event, cx) {
    var radius = cx.lineWidth / 2;
    var area = radius * radius * Math.PI;
    var dotsPerTick = Math.ceil(area / 30);

    var currentPos = relativePos(event, cx.canvas);
    var spray = setInterval(function () {
      for (var i = 0; i < dotsPerTick; i++) {
        var offset = randomPointInRadius(radius);
        cx.fillRect(currentPos.x + offset.x,
          currentPos.y + offset.y, 1, 1);
      }
    }, 25);

    trackDrag(function (event) {
      currentPos = relativePos(event, cx.canvas);
    }, function () {
      clearInterval(spray);
    });
  };
});