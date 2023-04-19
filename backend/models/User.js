const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  goal: { type: String, required: true },
  activity: { type: String, required: true },
  neededCalories: { type: Number, required: true },
  workouts: {
    type: Array,
    ref: "Workouts",
  },
  favoriteMeals: {
    type: Array,
    ref: "Meal",
  },
});

module.exports = User = mongoose.model("user", userSchema);
