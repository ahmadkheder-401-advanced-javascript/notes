'use strict';

const NoteDB = require('../modul/note-schema.js');


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

        const noteDB = new NoteDB(note);
        console.log('noteDB >>', noteDB);
        let noteItem = await noteDB.save();
        console.log('noot created >>', noteItem);

    }
    async addList() {
        // let allNoteItem = await NoteDB.find({});
        // console.log('allNoteItem', allNoteItem);
        var allNoteItem;
        if (this.category === 'allCategory') {
            allNoteItem = await NoteDB.find();
        } else {
            allNoteItem = await NoteDB.find({ category: this.category });
        }
        console.log('allNoteItem', allNoteItem);

    }
    async deleteList() {
        let deleteItem = await NoteDB.findByIdAndRemove(this.id);

        console.log('deleted>>>>Item', deleteItem);
    }
}


module.exports = Note;