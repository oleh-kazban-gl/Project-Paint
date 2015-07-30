define(function (require) {
  var brushSize = require('./brushSize');
  var color = require('./color');
  var openFile = require('./openFile');
  var openURL = require('./openURL');
  var save = require('./save');
  var tool = require('./tool');

  var controls = Object.create(null);

  controls.brushSize = brushSize;
  controls.color = color;
  controls.openFile = openFile;
  controls.openURL = openURL;
  controls.save = save;
  controls.tool = tool;

  return controls;
});