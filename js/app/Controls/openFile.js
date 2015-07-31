/**
 * @license Project Paint 1.0 Copyright (c) 2015, Oleh Kazban All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: https://github.com/olehkazban/Project-Paint for details
 */

define(function (require) {
  'use strict';

  var element = require('../Helpers/element');
  var loadImageURL = require('../Helpers/loadImageURL');

  return function (context) {
    var input = element('input', {type: 'file'});

    input.addEventListener('change', function () {
      if (input.files.length == 0) return;
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        loadImageURL(context, reader.result);
      });
      reader.readAsDataURL(input.files[0]);
    });

    return element('div', null, 'Open file: ', input);
  };
});