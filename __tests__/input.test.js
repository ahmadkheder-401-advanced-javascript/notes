
'use strict';

jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(()=> {
    return { a,add: 'note'  }
});

const Input = require('../lib/input.js');

describe('Input Module', () => {

    it('Valid() will return true when it get action&&payload', ()=> {
        let options = new Input();
        expect(options.Valid()).toBeTruthy();
    });
    it('Valid() will  return false  when it gets invalid action||payload', ()=> {
        let options = new Input();
        expect(options.Valid()).not.toBeTruthy();
    });

   
});

