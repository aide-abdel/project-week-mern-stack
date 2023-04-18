import React, { useState } from "react";
import { TextField, Button, MenuItem, InputAdornment } from "@mui/material";
import axios from "axios";

const Register = () => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    goal: "",
    activity: "",
    neededCalories: "",
    workouts: "",
  });
  const {
    firstName,
    lastName,
    email,
    password,
    gender,
    age,
    height,
    weight,
    goal,
    activity,
    neededCalories,
    workouts,
  } = user;

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    axios
      .post("http://localhost:3000/", user)
      .then((response) => {
        console.log("register succefull");
      })
      .catch((error) => {
        console.error(error);
        console.log(user);
      });
  };
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });
  return (
    <div
      style={{ border: "solid black 1px", borderRadius: "2%", padding: "5%" }}
    >
      <form autoComplete="on" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <TextField
          name="firstname"
          label="First Name"
          required
          variant="outlined"
          sx={{ mb: 3 }}
          fullWidth
          onChange={(e) => handleChange(e)}
        />
        <TextField
          name="lastname"
          label="Last Name"
          required
          variant="outlined"
          sx={{ mb: 3 }}
          fullWidth
          onChange={(e) => handleChange(e)}
        />
        <TextField
          name="email"
          label="Email"
          onChange={(e) => handleChange(e)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
        />
        <TextField
          name="password"
          label="Password"
          onChange={(e) => handleChange(e)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          label="Password (Again)"
          onChange={(e) => handleChange(e)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          name="password"
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <hr />
        <TextField
          name="gender"
          id="gender"
          select
          label="Gender"
          helperText="Please choose gender"
          fullWidth
          sx={{ mb: 3 }}
          onChange={(e) => handleChange(e)}
        >
          <MenuItem key="male" value="Male">
            Male
          </MenuItem>
          <MenuItem key="female" value="Female">
            Female
          </MenuItem>
          <MenuItem key="other" value="Other">
            Other
          </MenuItem>
        </TextField>
        <TextField
          name="age"
          label="Age"
          required
          type="number"
          variant="outlined"
          sx={{ mb: 3 }}
          fullWidth
          onChange={(e) => handleChange(e)}
        />
        <TextField
          name="height"
          label="Height"
          id="height"
          sx={{ mb: 3 }}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          name="weight"
          label="Weight"
          id="weight"
          sx={{ mb: 3 }}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          name="goal"
          id="goal"
          select
          label="Goal"
          helperText="Goal"
          fullWidth
          sx={{ mb: 3 }}
          onChange={(e) => handleChange(e)}
        >
          <MenuItem key="fat-loss" value="Fat Loss">
            Fat Loss
          </MenuItem>
          <MenuItem key="maintenance" value="Maintenance">
            Maintenance
          </MenuItem>
          <MenuItem key="muscle-gain" value="Muscle Gain">
            Muscle Gain
          </MenuItem>
        </TextField>
        <TextField
          name="activity"
          id="activity"
          select
          label="Activity"
          helperText="Activity"
          fullWidth
          sx={{ mb: 3 }}
          onChange={(e) => handleChange(e)}
        >
          <MenuItem key="lightly-active" value="Lightly Active">
            Lightly Active
          </MenuItem>
          <MenuItem key="moderately" value="Moderately">
            Moderately
          </MenuItem>
          <MenuItem key="very-active" value="Very Active">
            Very Active
          </MenuItem>
          <MenuItem key="extra-active" value="Extra Active">
            Extra Active
          </MenuItem>
        </TextField>
        <TextField
          name="neededCalories"
          label="Daily Calorie Need"
          required
          type="number"
          variant="outlined"
          sx={{ mb: 3 }}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="end">cal</InputAdornment>,
          }}
          onChange={(e) => handleChange(e)}
        />
        <Button
          variant="outlined"
          type="submit"
          color="primary"
          sx={{ color: "black" }}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
