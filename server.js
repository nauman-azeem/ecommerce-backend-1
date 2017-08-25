require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const mongodb = require('mongodb');
const path = require('path');

var app = express();
app.use(helmet());
app.use(bodyParser.json());

app.use('/static_files', express.static(path.join(__dirname, 'static_files')));

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});