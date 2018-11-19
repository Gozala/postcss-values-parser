'use strict';

import Container from './container.js';
import Node from './node.js';

class UnicodeRange extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'unicode-range';
  }
}

Container.registerWalker(UnicodeRange);

export default UnicodeRange;
