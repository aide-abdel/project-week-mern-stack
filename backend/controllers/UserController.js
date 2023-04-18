const User = require("../models/User");

async function createUser(req, res) {
  try {
    const user = new User(req.body);
    await user.save();
    res.send("User added!");
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = { createUser };
