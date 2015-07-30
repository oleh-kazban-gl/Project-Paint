define(function () {
  return function (event, cx) {
    var text = prompt("Text:", "");
    if (text) {
      var pos = relativePos(event, cx.canvas);
      cx.font = Math.max(7, cx.lineWidth) + "px sans-serif";
      cx.fillText(text, pos.x, pos.y);
    }
  };
});