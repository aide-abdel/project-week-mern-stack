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

async function getMealsByUserId(req, res) {
  try {
    const meals = await Meal.find({ user_id: req.params.userId }).populate(
      "meal_id"
    );
    res.json(meals);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}
module.exports = { addMeal, getMealsByUserId };
