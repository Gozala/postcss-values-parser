'use strict';

import Container from './container.js';
import Node from './node.js';

class Operator extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'operator';
  }
}

Container.registerWalker(Operator);

export default Operator;
