"use strict";
const Notes_model = require("./model/notes-schema");
class Notes {
  constructor() {}
  execute(userInput) {
    switch (userInput.action) {
      case "a":
        this.add(userInput);
        break;

      case "add":
        this.add(userInput);
        break;

      case "list":
        this.list(userInput);
        break;

      case "delete":
        this.delete(userInput);
        break;

      default:
        console.log("Invalid Command");
        break;
    }
  }
  async add(userInput) {
    let note = {
      payload: userInput.payload,
      category: userInput.category,
    };
    let record = new Notes_model(note);
      let saved = await record.save();
      console.log('for test');
      return saved;
  }
  async list(userInput) {
    let category;
    if (userInput.payload) {
      category = {
        category: userInput.payload,
      };
    } else {
      category = {};
    }
      let notesList = await Notes_model.find(category);
      notesList.forEach((e) => {
      });
      return notesList;
   
  }
  async delete(userInput) {
      let deleted = await Notes_model.findByIdAndDelete(userInput.payload);
      return deleted; 
  }
}


module.exports = Note;