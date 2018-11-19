'use strict';

import Container from './container.js';
import Node from './node.js';

class NumberNode extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'number';
    this.unit = Object(opts).unit || '';
  }

  toString () {
    return [
      this.raws.before,
      String(this.value),
      this.unit,
      this.raws.after
    ].join('');
  }
};

Container.registerWalker(NumberNode);

export default NumberNode;
