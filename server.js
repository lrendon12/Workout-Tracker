const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

// const Workout = require("./models/workout.js");

const app = express();

app.use(logger("dev"));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    seCreateIndex: true,
    useUnifiedTopology: true,
  });



// routes
app.use(require("./routes/api"));
app.use(require("./routes/html"));



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });