const express = require('express');

const newNote = require('./notes');

const app = express();

app.use('/notes', newNote);

module.exports = app;