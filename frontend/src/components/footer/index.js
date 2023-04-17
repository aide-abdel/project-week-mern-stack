import React from "react";
import { AppBar, Toolbar, Typography, Grid, Link, Icon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => (
  <>
    <Grid
      container
      style={{ minHeight: "212px", marginTop: "5%" }}
      spacing={6}
      sx={{
        justifyContent: "center",
        color: "white",
        backgroundColor: "black",
      }}
    >
      <Grid item xs={3}>
        <Typography variant="h5">FITNESS PLANNER</Typography>
        <Typography variant="body2">
          Online workout planner lets you create 5 free personalized workout
          plans to help you reach your fitness goals.
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h5">ABOUT US</Typography>
        <Typography variant="body2">
          Online workout planner lets you create 5 free personalized workout
          plans to help you reach your fitness goals.
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h5">
          CONTACTS <hr />
        </Typography>
        <Link to="/">
          <GitHubIcon />
        </Link>
        <Link to="/">
          <LinkedInIcon />
        </Link>
        <Link to="/">
          <InstagramIcon />
        </Link>
      </Grid>
      <AppBar
        position="static"
        component="footer"
        sx={{ backgroundColor: "black" }}
      >
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="caption">&copy;2023</Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  </>
);

export default Footer;
