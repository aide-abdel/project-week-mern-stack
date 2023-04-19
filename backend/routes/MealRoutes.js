const express = require("express");
const mongoose = require("../db");
const router = express.Router();
const MealController = require("../controllers/MealController");

router.get("meals/:userId", MealController.getMealsByUserId);
router.post("meals/:mealId/:userId", MealController.addMeal);
module.exports = router;
