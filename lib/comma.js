'use strict';

import Container from './container.js';
import Node from './node.js';

class Comma extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'comma';
  }
}

Container.registerWalker(Comma);

export default Comma;
