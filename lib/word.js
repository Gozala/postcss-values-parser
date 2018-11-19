'use strict';

import Container from './container.js';
import Node from './node.js';

class Word extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'word';
  }
}

Container.registerWalker(Word);

export default Word;
