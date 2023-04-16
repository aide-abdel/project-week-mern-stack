import { Box, Typography } from "@mui/material";
import React from "react";

function Banner() {
  return (
    <Box
      sx={{
        height: 150,
        backgroundColor: "black",
        color: "white",
        padding: "2%",
        marginTop: "1%",
      }}
    >
      <Typography variant="h2">Login / Register</Typography>
    </Box>
  );
}

export default Banner;
