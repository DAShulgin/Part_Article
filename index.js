const express = require('express')
const mongoose = require('mongoose');
const bodyParser  =require('body-parser');
const app = express()
 


app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/article-db' , { useNewUrlParser: true, useUnifiedTopology: true,} );
app.use('/api', require('./api'))

app.listen(4000, ()=> {
    console.log('servert is starting')
});