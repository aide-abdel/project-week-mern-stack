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
    <Container>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body">{description}</Typography>
      <Grid container>
        <Grid item xs={8}>
          {form}
        </Grid>
        <Grid item xs={4}>
          {result}
        </Grid>
      </Grid>
      <Typography variant="h4">{titleExplanation}</Typography>
      <Typography variant="body">{bodyExplanation}</Typography>
    </Container>
  );
}

export default LayoutCalculator;
