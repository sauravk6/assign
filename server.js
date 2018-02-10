const path = require('path');
const Full = require('./src/containers/Full/Full.js');

const express = require('express');

var app = express();

// adds functionality to express applications
app.use(express.static('build'));

console.log('ada');

app.listen(3000,() => {
  console.log('Server is up on port 3000');
});
