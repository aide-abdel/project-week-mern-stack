const { default: mongoose } = require("mongoose");

const workoutSchema = new mongoose.Schema({
  day: { type: String, required: true },
  excerciseOne: { type: String, required: true },
  excerciseTwo: { type: String },
  excerciseThree: { type: String },
  excerciseFour: { type: String },
  excerciseFive: { type: String },
  excerciseSix: { type: String },
});

module.exports = Workout = mongoose.model("workout", workoutSchema);
