import React, { useState } from "react";
import Appbar from "../appbar";
import StaticBanner from "../banner/StaticBanner";
import LayoutCalculator from "./LayoutCalculator";
import { Box, Button, TextField, Typography } from "@mui/material";
import Footer from "../footer";

function Bmi() {
  let height = 0,
    weight = 1;
  const [bmiIndex, setbmiIndex] = useState(null);
  const form = (
    <Box
      sx={{
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <TextField
        id="weight"
        label="Your weight... (kgs)"
        fullWidth
        onChange={(e) => {
          weight = e.target.value;
        }}
      />
      <TextField
        id="height"
        label="Your height... (cm)"
        fullWidth
        onChange={(e) => {
          height = e.target.value;
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          setbmiIndex((weight / ((height / 100) * (height / 100))).toFixed(2));
        }}
      >
        CALCULATE{" "}
      </Button>
    </Box>
  );
  const result = (
    <Box
      sx={{
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Typography variant="h5">YOUR BODY MASS INDEX IS</Typography>
      <Typography variant="h1" textAlign="center">
        {bmiIndex}
      </Typography>
      <Typography variant="body1">
        These calculations are based on averages.
      </Typography>
    </Box>
  );

  const title = "BMI CALCULATOR";
  const description =
    "Knowing BMI can help adult men and women understand their overall health. Use the BMI calculator below to determine your body mass index by inputting your height and weight.";
  const titleExplanation = "UNDERSTANDING YOUR BODY MASS INDEX";
  const bodyExplanation = (
    <Box width="60%">
      <Typography variant="body1">
        Now that you know your body mass index you are one step closer to
        mastering your overall health. Find out how to understand your BMI
      </Typography>
      <Typography variant="body1">
        <b>If your BMI is below 18.5:</b> Your BMI is considered underweight.
        Keep in mind that an underweight BMI calculation may pose certain health
        risks. Please consult your healthcare provider for more information
        about BMI calculations.
      </Typography>
      <Typography variant="body1">
        <b>If your BMI is between 18.5 – 24.9:</b> Your BMI is considered
        normal. This healthy weight helps reduce your risk of serious health
        conditions and means you’re close to your fitness goals.
      </Typography>
      <Typography variant="body1">
        <b>If your BMI is between 25 – 29.9: </b> You’re in the overweight
        range. You are at increased risk for a variety of illnesses at your
        present weight. You should lose weight by changing your diet and
        exercising more.
      </Typography>
      <Typography variant="body1">
        <b>If your BMI is above 30:</b> Your BMI is considered overweight. Being
        overweight may increase your risk of cardiovascular disease. Consider
        making lifestyle changes through healthy eating and fitness to improve
        your health.
      </Typography>
      <Typography variant="body1">
        Individuals who fall into the BMI range of 25 to 34.9, and have a waist
        size of over 40 inches for men and 35 inches for women, are considered
        to be at especially high risk for health problems.
      </Typography>
    </Box>
  );
  return (
    <React.Fragment>
      <Appbar />
      <StaticBanner text="BODY MASS INDEX (BMI)" />
      <LayoutCalculator
        title={title}
        description={description}
        titleExplanation={titleExplanation}
        bodyExplanation={bodyExplanation}
        form={form}
        result={result}
      />
      <Footer />
    </React.Fragment>
  );
}

export default Bmi;
