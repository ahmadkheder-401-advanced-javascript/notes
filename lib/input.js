'use strict';
const minimist = require('minimist');

function Input(){
    const args = minimist(process.argv.slice(2));
    this.command = this.getCommand(args.c);
    this.note = this.getNote(args.n);
}

Input.prototype.getCommand = function(command = ''){
    let validCommands = /add|a/i;
     console.log(`LINE 11  command IS${command}`);
    return validCommands.test(command)? command : `${command}: is Not Found`;
}
Input.prototype.getNote() = function(note = ''){
    
    console.log(`LINE 16 note IS ${note}`);
    return (note) ? note : `Your note is empty please fill it up`;
}


module.exports = Input;