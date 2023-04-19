const { default: mongoose } = require("mongoose");

const mealSchema = new mongoose.Schema({
  meal_id: { type: String, required: true },
  user: {
    ref: "User",
    required: true,
  },
});

module.exports = Meal = mongoose.model("meal", mealSchema);
