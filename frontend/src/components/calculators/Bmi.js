import React from "react";
import Appbar from "../appbar";
import StaticBanner from "../banner/StaticBanner";
import LayoutCalculator from "./LayoutCalculator";

function Bmi() {
  const title = "CALCULATE YOUR ONE-REP MAX (1RM)";
  const description =
    "Use the calculator below for any lift to estimate your one-rep max based on the amount of weight you can lift on a given move, and the number of clean reps you can achieve before muscle failure.";
  const titleExplanation = "WHY DO YOU NEED TO CALCULATE YOUR 1RM?";
  const bodyExplanation =
    "Strength coaches set up programs with percentages based on your 1RM because they don't know your actual strength level, but they know what percentages they want you to be using relative to your single-rep max. The calculator gives you all the relevant loads, which are done simply by multiplying the percentage by your 1RM.";
  return (
    <React.Fragment>
      <Appbar />
      <StaticBanner text="BODY MASS INDEX (BMI)" />
      <LayoutCalculator
        title={title}
        description={description}
        titleExplanation={titleExplanation}
        bodyExplanation={bodyExplanation}
        form={1}
        result={2}
      />
    </React.Fragment>
  );
}

export default Bmi;
