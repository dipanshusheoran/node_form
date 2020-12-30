const express = require('express');
const mongoose = require('mongoose')
const movies = require('./movies.js');
const bodyParser = require('body-parser')
require('dotenv/config')

var app = express();
app.use(bodyParser.json());
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({
    extended: true
  }));
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true, useUnifiedTopology: true })

app.use('/movies', movies);

const PORT = process.env.PORT || 3000
app.listen(PORT,() => console.log('Connected to server'));