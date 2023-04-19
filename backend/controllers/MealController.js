const Meal = require("../models/Meal");

async function addMeal(req, res) {
  const { meal_id, user_id } = req.body;
  try {
    await Meal.create({
      meal_id,
      user_id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { addMeal };
