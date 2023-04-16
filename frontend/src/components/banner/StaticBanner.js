import { Box, Typography } from "@mui/material";
import React from "react";

function StaticBanner({ text }) {
  return (
    <Box sx={{ height: 200, backgroundColor: "black", marginTop: "1%" }}>
      <Typography variant="h2" color="white" textAlign="center">
        {text}
      </Typography>
    </Box>
  );
}

export default StaticBanner;
