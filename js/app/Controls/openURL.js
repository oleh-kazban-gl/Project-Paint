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
    var input = element('input', {type: 'text'});
    var form = element('form', null,
      'Open URL: ', input,
      element('button', {type: 'submit'}, 'load'));
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      loadImageURL(context, input.value);
    });
    return form;
  };
});