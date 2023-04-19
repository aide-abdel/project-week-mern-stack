const express = require("express");
const mongoose = require("../db");
const router = express.Router();
const WorkoutsController = require("../controllers/WorkoutsController");

router.post("workouts/:user_id", WorkoutsController.createWorkout);
module.exports = router;
