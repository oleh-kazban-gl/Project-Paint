define(function () {
  return function (event) {
    return {
      x: Math.floor(event.pageX),
      y: Math.floor(event.pageY)
    };
  }
});