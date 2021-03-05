'use strict';

exports.__esModule = true;
exports.isPlainObject = isPlainObject;
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}