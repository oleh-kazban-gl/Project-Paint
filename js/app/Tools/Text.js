define(function () {
  return function (event, context) {
    var text = prompt("Text:", "");
    if (text) {
      var pos = relativePos(event, context.canvas);
      context.font = Math.max(7, context.lineWidth) + "px sans-serif";
      context.fillText(text, pos.x, pos.y);
    }
  };
});