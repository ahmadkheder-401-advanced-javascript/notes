#!/usr/bin/env node

'use strict';

const Input = require('./lib/input.js');
const Notes  = require('./lib/notes.js');

const userInput= new Input();
const note = new Notes();

let UserNote = note.execute(userInput);
