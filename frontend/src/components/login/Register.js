import React, { useState } from "react";
import { TextField, Button, MenuItem, InputAdornment } from "@mui/material";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [user, setUser] = useState([
    {
      firstName: "",
      lastName: "",
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
    },
  ]);
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
      .post("/users", user)
      .then((response) => {
        console.log("register succefful");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handlefNameChange = (event) => {};
  const handlelNameChange = (event) => {};
  return (
    <div
      style={{ border: "solid black 1px", borderRadius: "2%", padding: "5%" }}
    >
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <TextField
          label="First Name"
          required
          variant="outlined"
          sx={{ mb: 3 }}
          fullWidth
          onChange={(event) => handlefNameChange(event)}
        />
        <TextField
          label="Last Name"
          required
          variant="outlined"
          sx={{ mb: 3 }}
          fullWidth
          onChange={(event) => handlelNameChange(event)}
        />
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
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
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          label="Password (Again)"
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <hr />
        <TextField
          id="gender"
          select
          label="Gender"
          helperText="Please choose gender"
          fullWidth
          sx={{ mb: 3 }}
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
          label="Age"
          required
          type="number"
          variant="outlined"
          sx={{ mb: 3 }}
          fullWidth
        />
        <TextField
          label="Height"
          id="height"
          sx={{ mb: 3 }}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          id="weight"
          sx={{ mb: 3 }}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
        <TextField
          id="goal"
          select
          label="Goal"
          helperText="Goal"
          fullWidth
          sx={{ mb: 3 }}
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
          id="activity"
          select
          label="Activity"
          helperText="Activity"
          fullWidth
          sx={{ mb: 3 }}
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
          label="Daily Calorie Need"
          required
          type="number"
          variant="outlined"
          sx={{ mb: 3 }}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="end">cal</InputAdornment>,
          }}
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
