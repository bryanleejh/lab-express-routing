// includes express library in local scope
const express = require('express');
// add path module
const path = require('path');
const bodyParser = require('body-parser');

// initializes express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const candiesController = require('./controller/candies')(app);

app.listen(3000, () => {
    console.log('Node.js listening on port 3000');
});
