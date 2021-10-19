var express = require('express')
var bodyParser = require("body-parser")
var cors = require("cors")
var app = express()
const mongoose = require('mongoose')

// DB Config

const db = require('./config/keys').mongoURI;

// Connect to mongo db

mongoose
.connect(db)
.then(()=>console.log("connected successfully"))
.catch(err=>console.log(err));

// --------------------------------------------------------------------------

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

// --------------------------------------------------------------------------

app.post('/register',function(req,res){
    const user = req.body;
    res.status(201)
    res.statusMessage="We've got your data"
    res.send(`username:${user.username}`)
})

// --------------------------------------------------------------------------

app.listen(8080,function(){
    console.log('Example App listening on port 8080!');
});