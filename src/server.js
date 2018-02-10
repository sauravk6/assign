import path from 'path';
import { Server } from 'http';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';


var app = express();

// adds functionality to express applications
app.use(express.static('build'));

console.log('ada');

app.listen(3000,() => {
  console.log('Server is up on port 3000');
});
