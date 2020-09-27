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
    if (this.action === 'add' || this.action === 'a'){
      return this.action && this.payload && this.category;
    }else{
      this.action
    }
    
  }
  getAction(args) {
    if (!args) {
      return undefined
    } else if (args.a) {
      return 'a'
    } else if (args.add) {
      return 'add'
    } else if(args.list ){
      return 'list';
    }else if(args.delete ){
      return 'delete';
    }else{
      return   undefined;
    }
  }
  getPayload(content) {
    if (!(typeof content === 'string')) {
      return undefined;
    } else {
      return content; //payload
    }
  }
  getCategory(args) {
    if (!args) {
      return undefined
    } else if (args.c) {
      return args.c
    } else if (args.category) {
      return args.category
    } else {
      return undefined;
    }  }
}
module.exports = Input;

