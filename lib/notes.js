'use strict';

// const NoteDB = require('../modul/note-schema.js');

const NoteCall = require('../modul/notes-collection');
const noteObj = new NoteCall();

class Note {
    constructor(obj) {
        console.log('sssssssssssssss', obj);
        this.action = obj.action;
        this.payload = obj.payload;
        this.category = obj.category;
        this.id = obj.id;

        this.execute();
    }

    execute() {
        if (this.action === 'add') {
            console.log('sss');
            this.add();
        } else if (this.action === 'list') {
            this.addList();

        } else if (this.action === 'delete') {
            this.deleteList();
        }
    }

    async add() {
        let note = {
            text: this.payload,
            category: this.category,
        };

        let noteItem = await noteObj.create(note);
        console.log('noot created >>', noteItem);
        return noteItem;
    }

    async addList() {
        var allNoteItem;
        console.log('00000000000', this.category);
        if (this.category === 'allCategory') {
            allNoteItem = await noteObj.get();
        } else {
            allNoteItem = await noteObj.get({ category: this.category });

        }
        console.log('allNoteItem', allNoteItem);
    }

    async deleteList() {
        let deleteItem = await noteObj.delete({ _id: this.id });
        console.log('deleted>>>>Item', deleteItem);

    }


}

module.exports = Note;