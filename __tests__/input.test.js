'use strict';


jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(() => {
    return {
        a: 'text',
        add: 'text',

    };
});


const Input = require('../input.js');


describe('input module', () => {

    it('getMethod() if the input is correct ', () => {
        let options = new Input();
        expect(options.getMethod({ _: [], a: 'message', category: 'message' })).toEqual({ action: 'add', payload: 'message', category: 'message' });
    });

    it('getNote() if the input is correct ', () => {
        let options = new Input();
        expect(options.getNote('message')).toEqual({ 'action': 'add', 'payload': 'message' });
    });

    it('getNote() if the input is empty', () => {
        let options = new Input();
        expect(options.getNote(true)).toEqual('Please Enter a valid message inside \' \' ');
    });

    it('getNote() if the action not equal add or a ', () => {
        let options = new Input();
        expect(options.getNote('error')).toEqual('Please Enter -a or --add to add a note  ');
    });



    it('valid() respects proper object ', () => {
        let option = new Input();
        expect(option.valid()).toBeTruthy();

    });

});