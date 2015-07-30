define(function (require) {
  var controls = require('../Controls');
  var element = require('./element');

  return function (parent) {
    var canvas = element('canvas', {width: 500, height: 300});
    var cx = canvas.getContext('2d');
    var toolbar = element('div', {class: 'toolbar'});

    for (var name in controls) {
      toolbar.appendChild(controls[name](cx));
    }

    var panel = element('div', {class: 'picturepanel'}, canvas);
    parent.appendChild(element('div', null, panel, toolbar));
  }

});