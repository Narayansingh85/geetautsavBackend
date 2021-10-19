// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const url = require("url");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userController = require('./controllers/user');
const cors = require('cors');

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb+srv://ravi:X2PDDVZqftxH2K8P@cluster0.3yica.mongodb.net/umang?retryWrites=true&w=majority', {useNewUrlParser: true});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use('/users', userController);


// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

app.post("/umang", (request, response) => {
  const query = url.parse(request.url,true).query;
  // response.sendFile(__dirname + "/views/success.html");
  response.status(200).send();
  
})

app.get("/umang", (request, response) => {
  const query = url.parse(request.url,true).query;
  // response.sendFile(__dirname + "/views/success.html");
  response.status(200).send();
})

app.post("/umang/failed", (request, response) => {
  const query = url.parse(request.url,true).query;
  // response.sendFile(__dirname + "/views/success.html");
  response.status(200).send();
  
})

app.get("/umang/failed", (request, response) => {
  const query = url.parse(request.url,true).query;
  console.log('failed >>>>>>>>>>>>>>22 ',JSON.stringify(query));
  // response.sendFile(__dirname + "/views/success.html");
  response.status(200).send();
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
