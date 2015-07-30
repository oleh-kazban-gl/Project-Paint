define(function () {
  function absolutePos(event) {

    return {
      x: Math.floor(event.pageX),
      y: Math.floor(event.pageY)
    };
  }

  return absolutePos;
});