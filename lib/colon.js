'use strict';

import Container from './container.js';
import Node from './node.js';

class Colon extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'colon';
  }
}

Container.registerWalker(Colon);

export default Colon;
