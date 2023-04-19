const { default: mongoose } = require("mongoose");

const workoutSchema = new mongoose.Schema({
  day: { type: String, required: true },
  excercises: { type: Array },
});

module.exports = Workout = mongoose.model("workout", workoutSchema);
