'use strict';
// Bring in some 3rd party libraries to help us out
const minimist = require('minimist');
/**
 * Input Function that reads user input from terminal 
 */
function Input() {
  // read user input from terminal
  const args = minimist(process.argv.slice(2));
  if (args.a && process.argv.slice(2)[1] != undefined) {
    console.log("CONDITION IS", args.a);
    console.log("NOTE", process.argv.slice(2)[1]);
    console.log("COMMAND:", process.argv.slice(2)[0].slice(1));

    let returnedInestance = {
      action: process.argv.slice(2)[0].slice(1),
      payload: process.argv.slice(2)[1]
    };
    return returnedInestance;
  }
}
module.exports = Input;
