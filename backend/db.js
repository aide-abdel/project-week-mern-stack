const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.mongoURI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("Connected to the database."));

module.exports = mongoose;
