const { default: mongoose } = require("mongoose");

const workoutSchema = new mongoose.Schema({
  excerciseOne: { type: String, required: true },
  excerciseTwo: { type: String, required: true },
  excerciseThree: { type: String, required: true },
  excerciseFour: { type: String, required: true },
  excerciseFive: { type: String, required: true },
  excerciseSix: { type: String, required: true },
});

module.exports = Workout = mongoose.model("workout", workoutSchema);
