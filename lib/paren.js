'use strict';

import Container from './container.js';
import Node from './node.js';

class Parenthesis extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'paren';
    this.parenType = '';
  }
}

Container.registerWalker(Parenthesis);

export default Parenthesis;
