import React from "react";
import Appbar from "../appbar";
import StaticBanner from "../banner/StaticBanner";
import LayoutCalculator from "./LayoutCalculator";
import Footer from "../footer";
import { Box, Button, TextField, Typography } from "@mui/material";

function Bfi() {
  const title = "DETERMINE YOUR BODY FAT PERCENTAGE";
  const description =
    "Use a tape measure to determine your waist, hip and neck circumference. Then input your gender and measurements below to receive a body fat index based on average values. The body fat index is not an indicator of fitness level since the calculation is made with no regard to height or weight.";
  const titleExplanation = "BODY FAT PERCENTAGE CATEGORIES";
  const bodyExplanation = " ";
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
          //   weight = e.target.value;
        }}
      />
      <TextField
        id="height"
        label="Your height... (cm)"
        fullWidth
        onChange={(e) => {
          //   height = e.target.value;
        }}
      />
      <Button
        variant="contained"
        // onClick={}
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
        ?
      </Typography>
      <Typography variant="body1">
        These calculations are based on averages.
      </Typography>
    </Box>
  );
  return (
    <React.Fragment>
      <Appbar />
      <StaticBanner text="BODY FAT INDEX" />
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

export default Bfi;
