import { Container, Grid, Typography } from "@mui/material";
import React from "react";

function LayoutCalculator({
  title,
  description,
  titleExplanation,
  bodyExplanation,
  form,
  result,
}) {
  return (
    <Container sx={{ marginTop: "1%" }}>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="subtitle1">{description}</Typography>
      <Grid container spacing={10}>
        <Grid item xs={8}>
          {form}
        </Grid>
        <Grid item xs={4}>
          {result}
        </Grid>
      </Grid>
      <Typography variant="h5">{titleExplanation}</Typography>
      <Typography variant="subtitle1">{bodyExplanation}</Typography>
    </Container>
  );
}

export default LayoutCalculator;
