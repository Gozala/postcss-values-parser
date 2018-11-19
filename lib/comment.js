'use strict';

import Container from './container.js';
import Node from './node.js';

class Comment extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'comment';
    this.inline = Object(opts).inline || false;
  }

  toString () {
    return [
      this.raws.before,
      this.inline ? '//' : '/*',
      String(this.value),
      this.inline ? '' : '*/',
      this.raws.after
    ].join('');
  }
};

Container.registerWalker(Comment);

export default Comment;
