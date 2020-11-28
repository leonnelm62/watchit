#!/usr/bin/env node

const chokidar = require('chokidar');

chokidar.watch('.')
    .on('add', () => console.log('FILE ADDED'))
    .on('change', () => console.log('FILE CHANGE'))
    .on('unlink', () => console.log('FILE UNLINK'));