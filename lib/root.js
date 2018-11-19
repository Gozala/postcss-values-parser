'use strict';

import Container from './container.js';

export default class Root extends Container {
  constructor (opts) {
    super(opts);
    this.type = 'root';
  }
};
