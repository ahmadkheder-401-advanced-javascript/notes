
'use strict';
// Bring in some 3rd party libraries to help us out
const minimist = require('minimist');


class Input {
  constructor() {
    this.args = minimist(process.argv.slice(2));
    this.payload = process.argv.slice(2)[1];
  }
  Valid() {
    if(this.args.a && this.payload != undefined){
      console.log("CONDITION IS", args.a);
      console.log("NOTE", process.argv.slice(2)[1]);
      console.log("COMMAND:", process.argv.slice(2)[0].slice(1));

      let returnedInestance = { action: process.argv.slice(2)[0].slice(1), payload: process.argv.slice(2)[1] };
      return returnedInestance;
    }
  }

}
module.exports = Input;

