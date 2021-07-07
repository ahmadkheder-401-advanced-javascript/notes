'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = this.getAction(args);
    this.payload = this.action ? this.getPayload(args[this.action]) : undefined;
    this.category = this.getCategory(args);
  }

  isValid() {
    return this.action === 'add' || this.action === 'a'
      ? this.action && this.payload && this.category
      : this.action === 'delete'
        ? this.action && this.payload
        : this.action;
  }


  getAction(args) {
    return !args
      ? undefined
      : args.a
        ? 'a'
        : args.add
          ? 'add'
          : args.list
            ? 'list'
            : args.delete
              ? 'delete'
              : undefined; //action
  }

  getPayload(content) {
    if (!(typeof content === 'string')) {
      return undefined;
    } else {
      return content; //payload
    }
  }

  getCategory(args) {
    return !args
      ? undefined
      : args.c
        ? args.c
        : args.category
          ? args.category
          : undefined; //category
  }
}

module.exports = Input;