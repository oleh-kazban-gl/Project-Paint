define(function (require) {
  var brushSize = require('./Controls/brushSize');
  var color = require('./Controls/color');
  var openFile = require('./Controls/openFile');
  var openURL = require('./Controls/openURL');
  var save = require('./Controls/save');
  var tool = require('./Controls/tool');

  var controls = Object.create(null);

  controls.brushSize = brushSize;
  controls.color = color;
  controls.openFile = openFile;
  controls.openURL = openURL;
  controls.save = save;
  controls.tool = tool;

  return controls;
});