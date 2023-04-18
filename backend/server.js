const express = require("express");

const cors = require("cors");

const userRoutes = require("./routes/UserRoutes");

const app = express();

app.use(cors());

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("server listening!");
});
