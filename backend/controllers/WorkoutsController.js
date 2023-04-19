const Workout = require("../models/Workouts");

async function createWorkout(req, res) {
  const { day, excercises } = req.body;
  try {
    await Workout.create({
      day,
      excercises,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { createWorkout };
