'use strict';


const schema = require('./note-schema.js');

class Noote {
  constructor() {}

  create(record) {
    let noteObj = new schema(record);
    return noteObj.save();
  }

  get(category) {
    if (category) {
      return schema.find(category);
    } else {
      return schema.find();
    }

  }
  update(_id, data) {
    let noteObj = new schema();
    return noteObj.findOneAndUpdate(_id, data);
  }

  delete(_id) {
    new schema(_id);
  }

}

module.exports = Noote;