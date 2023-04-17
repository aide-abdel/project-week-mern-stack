import React from "react";
import Appbar from "../appbar";
import StaticBanner from "../banner/StaticBanner";
import LayoutCalculator from "./LayoutCalculator";
import Footer from "../footer";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableContainer,
  TextField,
  Typography,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function Bfi() {
  const title = "DETERMINE YOUR BODY FAT PERCENTAGE";
  const description =
    "Use a tape measure to determine your waist, hip and neck circumference. Then input your gender and measurements below to receive a body fat index based on average values. The body fat index is not an indicator of fitness level since the calculation is made with no regard to height or weight.";
  const titleExplanation = "BODY FAT PERCENTAGE CATEGORIES";
  const bodyExplanation = (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="BFI Index">
        <TableHead>
          <TableRow sx={{ backgroundColor: "black" }}>
            <StyledTableCell sx={{ fontWeight: "bold", color: "white" }}>
              {"Classification".toUpperCase()}
            </StyledTableCell>
            <StyledTableCell
              align="left"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              WOMEN (%FAT)
            </StyledTableCell>
            <StyledTableCell
              align="left"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              MEN (% FAT)
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell align="left">Essential Fat </StyledTableCell>
            <StyledTableCell align="left">10-13 %</StyledTableCell>
            <StyledTableCell align="left">2-5 %</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="left">Athletes</StyledTableCell>
            <StyledTableCell align="left"> 14-20 %</StyledTableCell>
            <StyledTableCell align="left">6-13 %</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="left">Fitness</StyledTableCell>
            <StyledTableCell align="left">21-24 % </StyledTableCell>
            <StyledTableCell align="left">14-17 %</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="left">Acceptable</StyledTableCell>
            <StyledTableCell align="left">25-31 % </StyledTableCell>
            <StyledTableCell align="left">18-25 %</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="left">Obese</StyledTableCell>
            <StyledTableCell align="left">32+ %</StyledTableCell>
            <StyledTableCell align="left">25+ %</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
  const form = (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField id="gender" select label="Gender" fullWidth>
          <MenuItem key="male" value="Male">
            Male
          </MenuItem>
          <MenuItem key="female" value="Female">
            Female
          </MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="waist"
          label="Waist circumference (cm)"
          fullWidth
          onChange={(e) => {
            //   height = e.target.value;
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="hip"
          label="Hip circumference (cm)"
          fullWidth
          onChange={(e) => {
            //   height = e.target.value;
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="Neck"
          label="Neck circumference (cm)"
          fullWidth
          onChange={(e) => {
            //   height = e.target.value;
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="weight"
          label="Weight (kgs)"
          fullWidth
          onChange={(e) => {
            //   height = e.target.value;
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="Height"
          label="Height (cm)"
          fullWidth
          onChange={(e) => {
            //   height = e.target.value;
          }}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          // onClick={}
        >
          CALCULATE{" "}
        </Button>
      </Grid>
    </Grid>
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
