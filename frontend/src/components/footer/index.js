import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "500",
        backgroundColor: "#000",
        color: "#fff",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="h5">
              FITNESS PLANNER
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
