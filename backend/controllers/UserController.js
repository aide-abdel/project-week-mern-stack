const bcrypt = require("bcrypt");
const User = require("../models/User");

async function createUser(req, res) {
  const {
    firstname,
    lastname,
    email,
    password,
    gender,
    age,
    height,
    weight,
    goal,
    activity,
    neededCalories,
    workouts,
  } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      gender,
      age,
      height,
      weight,
      goal,
      activity,
      neededCalories,
      workouts,
    });
    req.session.user = user;
    res.json({ sucess: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { createUser };
