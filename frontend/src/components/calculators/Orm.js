import React, { useState } from "react";
import Appbar from "../appbar";
import StaticBanner from "../banner/StaticBanner";
import LayoutCalculator from "./LayoutCalculator";
import { Box, Button, TextField, Typography } from "@mui/material";
import Footer from "../footer";

function Orm() {
  let numreps = 0,
    weight = 1;
  const [ormIndex, setormIndex] = useState(null);
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
        label="Weight Lifted (kgs)"
        fullWidth
        onChange={(e) => {
          weight = e.target.value;
        }}
      />
      <TextField
        id="reps"
        label="Reps"
        fullWidth
        onChange={(e) => {
          numreps = e.target.value;
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          setormIndex(Math.floor(weight * (36 / (37 - numreps))));
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
      <Typography variant="h5">YOUR ONE-REP MAX IS</Typography>
      <Typography variant="h1" textAlign="center">
        {ormIndex}
      </Typography>
      <Typography variant="body1">
        These calculations are based on averages.
      </Typography>
    </Box>
  );

  const title = "CALCULATE YOUR ONE-REP MAX (1RM)";
  const description =
    "Use the calculator below for any lift to estimate your one-rep max based on the amount of weight you can lift on a given move, and the number of clean reps you can achieve before muscle failure.";
  const titleExplanation = "WHY DO YOU NEED TO CALCULATE YOUR 1RM?";
  const bodyExplanation =
    "Strength coaches set up programs with percentages based on your 1RM because they don’t know your actual strength level, but they know what percentages they want you to be using relative to your single-rep max. The calculator gives you all the relevant loads, which are done simply by multiplying the percentage by your 1RM.";
  return (
    <React.Fragment>
      <Appbar />
      <StaticBanner text="ONE-REP MAX" />
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

export default Orm;
