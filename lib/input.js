'use strict';
const minimist = require('minimist');

// ./index.js -a 'text' 

class Input {
    constructor() {
        //capturing the args
        const args = minimist(process.argv.slice(2));
        console.log('process.argv', minimist(process.argv.slice(2)));
        this.arg = this.getMethod(args);
        console.log('arg', this.arg);
    }

    getMethod(arg) {
        console.log('arg  >>>', arg);

        if (Object.keys(arg)[1] === 'add' || Object.keys(arg)[1] === 'a') {
            if (Object.keys(arg)[2] === 'category') {
                this.note = this.getNote(arg.add || arg.a, arg.category);
            } else {
                this.note = this.getNote('error');
            }

        } else if (Object.keys(arg)[1] === 'list') {
            this.note = this.getList(arg.list);
        } else if (Object.keys(arg)[1] === 'delete') {
            this.note = this.getDelete(arg.delete);
        } else {
            this.note = this.getNote('error');
        }
        return this.note;
    }

    getNote(note, category) {
        console.log('noooote', note);
        if (note === 'error') {
            return 'Please Enter -a or --add to add a note  ';
        } else if (note !== true && category !== true) {
            return { action: 'add', payload: note, category: category };
        } else {
            return 'Please Enter a valid message inside \' \' ';
        }
    }
    getList(cat) {
        console.log('cattttttttttt', cat);
        if (cat !== null && cat !== undefined && cat !== true) {
            return { action: 'list', category: cat };

        } else {
            return { action: 'list', category: 'allCategory' };

        }

    }
    getDelete(id) {
        if (id !== true) {
            return { action: 'delete', id: id };
        } else {
            return 'Please Enter id';
        }
    }


    valid() {
        console.log('this.arg : ', this.arg);
        console.log('this.note : ', this.note);
        return this.note;
    }


}

module.exports = Input;