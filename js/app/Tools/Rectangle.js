define(function (require) {
  var relativePos = require('../Helpers/relativePos');
  var absolutePos = require('../Helpers/absolutePos');
  var trackDrag = require('../Helpers/trackDrag');

  return function (event, context) {
    var position = relativePos(event, context.canvas);

    var positionStart = absolutePos(event);

    var trackingDiv = document.createElement('div');
    trackingDiv.setAttribute('id', 'tracking');
    trackingDiv.style.position = 'absolute';
    trackingDiv.style.background = context.fillStyle;

    document.body.appendChild(trackingDiv);

    var rect = rectAt(positionStart, {
      x: event.pageX,
      y: event.pageY
    });

    trackDrag(function (event) {
      rect = rectAt(positionStart, {
        x: event.pageX,
        y: event.pageY
      });

      trackingDiv.style.left = rect.x + 'px';
      trackingDiv.style.top = rect.y + 'px';
      trackingDiv.style.width = rect.width + 'px';
      trackingDiv.style.height = rect.height + 'px';

      rect = rectAt(position, relativePos(event, context.canvas));
    }, function () {
      document.body.removeChild(trackingDiv);
      context.fillRect(rect.x, rect.y, rect.width, rect.height);
    });
  }
});

function rectAt(a, b) {
  return {
    x: Math.min(a.x, b.x),
    y: Math.min(a.y, b.y),
    width: Math.abs(a.x - b.x),
    height: Math.abs(a.y - b.y)
  }
}