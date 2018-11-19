'use strict';

import Parser from './parser.js';
import AtWord from './atword.js';
import Colon from './colon.js';
import Comma from './comma.js';
import Comment from './comment.js';
import Func from './function.js';
import Numbr from './number.js';
import Operator from './operator.js';
import Paren from './paren.js';
import UnicodeRange from './unicode-range.js';
import Value from './value.js';
import Word from './word.js';

let parser = function (source, options) {
  return new Parser(source, options);
};

parser.atword = function (opts) {
  return new AtWord(opts);
};

parser.colon = function (opts) {
  return new Colon(Object.assign({ value: ':' }, opts));
};

parser.comma = function (opts) {
  return new Comma(Object.assign({ value: ',' }, opts));
};

parser.comment = function (opts) {
  return new Comment(opts);
};

parser.func = function (opts) {
  return new Func(opts);
};

parser.number = function (opts) {
  return new Num(opts);
};

parser.operator = function (opts) {
  return new Operator(opts);
};

parser.paren = function (opts) {
  return new Paren(Object.assign({ value: '(' }, opts));
};

parser.string = function (opts) {
  return new Str(Object.assign({ quote: '\'' }, opts));
};

parser.value = function (opts) {
  return new Value(opts);
};

parser.word = function (opts) {
  return new Word(opts);
};

parser.unicodeRange = function (opts) {
  return new UnicodeRange(opts);
};

export default parser;
