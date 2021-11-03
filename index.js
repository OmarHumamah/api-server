'use strict';

const { start } = require('./src/server');
const { database } = require('./src/models/index');

database.sync()
.then(()=>{
    start();
}).catch(err=> console.log(err));