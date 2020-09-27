'use strict';
const mongoose = require('mongoose');
const Input = require('./lib/input');
const Notes = require('./lib/notes');
const MONGOOSE_URL = 'mongodb://localhost:27017/foo';
mongoose.connect(MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const userInput = new Input();
const notes = new Notes();
userInput.isValid() ? notes.execute(userInput) : showError();
function showError() {
  console.log(`
      api usage: 
      --add <note> --category <category>
    --add or -a adding new note
    --category or -c adding category
`);
}
