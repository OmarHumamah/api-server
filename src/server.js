'use strict';

const express = require('express');
require('dotenv').config();

const app = express();
const notFound = require('./error-handler/404');
const error = require('./error-handler/500');


const foodRouter = require('./routes/food.route');
const clothesRouter = require('./routes/clothes.route'); 

const PORT = process.env.PORT || 3001

app.use(express.json());

app.use(foodRouter);
app.use(clothesRouter);

app.use('*', notFound);
app.use(error)

function start() {
    app.listen(PORT, ()=>{
        console.log(`server is running on ${PORT}`);
    })
}

module.exports = {
    server: app,
    start: start
}
 