
'use strict';

const Notes = require('../lib/notes.js');
// Spies!
// we will get to know if something was called or not.
jest.spyOn(global.console, 'log');

// describe the module I am testing
describe('Notes Module', ()=> {
    // test case
    it('execute() does nothing with if there was no command given', ()=> {
        const note = new Notes();
        note.execute();
        expect(console.log).not.toHaveBeenCalled();
    });
    it('execute() does nothing with if there was no command given', ()=> {
        const note = new Notes();
        note.execute({ action: a, payload: '__test__ payload note'});
        expect(console.log).toHaveBeenCalled();
    });

    

});