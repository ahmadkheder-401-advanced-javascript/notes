'use strict';

const execute = {};
execute.add = function(notes){
    let noteObj = {
        ID : Math.ceil(Math.random() * 10),
    };

    if(notes){
        noteObj.note = notes;
        console.log(`added note ${noteObj}`)
    }
}
module.exports = execute;