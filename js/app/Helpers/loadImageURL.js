define(function () {
  return function (context, url) {
    var image = document.createElement("img");

    image.addEventListener("load", function () {
      var color = context.fillStyle, size = context.lineWidth;
      context.canvas.width = image.width;
      context.canvas.height = image.height;
      context.drawImage(image, 0, 0);
      context.fillStyle = color;
      context.strokeStyle = color;
      context.lineWidth = size;
    });

    image.src = url;
  };
});