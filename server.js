require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const mongodb = require('mongodb');


var app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use('/staticfiles', express.static('staticfiles'));

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});