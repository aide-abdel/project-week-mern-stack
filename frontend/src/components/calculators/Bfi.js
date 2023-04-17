import React from "react";
import Appbar from "../appbar";
import StaticBanner from "../banner/StaticBanner";
import LayoutCalculator from "./LayoutCalculator";
import Footer from "../footer";

function Bfi() {
  const title = "DETERMINE YOUR BODY FAT PERCENTAGE";
  const description =
    "Use a tape measure to determine your waist, hip and neck circumference. Then input your gender and measurements below to receive a body fat index based on average values. The body fat index is not an indicator of fitness level since the calculation is made with no regard to height or weight.";
  const titleExplanation = "BODY FAT PERCENTAGE CATEGORIES";
  const bodyExplanation = " ";
  const form = "form";
  const result = "result";
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
