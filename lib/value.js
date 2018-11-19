'use strict';

import Container from './container.js';

export default class Value extends Container {
  constructor (opts) {
    super(opts);
    this.type = 'value';
    this.unbalanced = 0;
  }
};
