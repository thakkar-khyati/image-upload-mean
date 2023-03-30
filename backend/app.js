const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const profilesRoute = require('./routes/profiles')

const app = express();

mongoose.connect('mongodb://localhost:27017/image-upload')

app.use(bodyParser.json())
app.use(cors())

app.use('/images',express.static(path.join('images')))

app.use('/profiles', profilesRoute)

app.listen(3000, () => {
  console.log("server running on 3000");
});
