import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import {
  MyAppBar,
  MyLogoBox,
  MyMenuBox,
  MyMenuButton,
  MyRightMenu,
} from "../../styles/appbar";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Link } from "react-router-dom";
export default function AppbarDesktop({ matches }) {
  return (
    <MyAppBar>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <MyLogoBox>
          <FitnessCenterIcon
            sx={{ fontSize: "3em", marginLeft: ".5em", marginRight: ".2em" }}
          />
          <Button
            variant="text"
            sx={{ color: "#fff", fontSize: "1.5em", marginRight: "5em" }}
          >
            FITNESS PLANNER
          </Button>
        </MyLogoBox>
      </Link>
      <MyMenuBox>
        <PopupState variant="popover" popupId="calculator-popup">
          {(PopupState) => (
            <>
              <MyMenuButton
                sx={{ fontWeight: "bold" }}
                variant="text"
                {...bindTrigger(PopupState)}
              >
                Calculator
              </MyMenuButton>
              <Menu {...bindMenu(PopupState)}>
                <Link to="/calculators/bmi">
                  <MenuItem onClick={PopupState.close}>
                    Body Mass Index
                  </MenuItem>
                </Link>
                <MenuItem onClick={PopupState.close}>Body Fat Index</MenuItem>
                <MenuItem onClick={PopupState.close}>Calories Burned</MenuItem>
                <MenuItem onClick={PopupState.close}>
                  Daily Calorie Calculator
                </MenuItem>
                <MenuItem onClick={PopupState.close}>One-rep Max</MenuItem>
              </Menu>
            </>
          )}
        </PopupState>
        <MyMenuButton variant="text" sx={{ fontWeight: "bold" }}>
          <Link
            to="/exercises"
            style={{ textDecoration: "none", color: "white" }}
          >
            Exercises
          </Link>
        </MyMenuButton>
        <MyMenuButton variant="text" sx={{ fontWeight: "bold" }}>
          Workouts
        </MyMenuButton>
        <MyMenuButton variant="text" sx={{ fontWeight: "bold" }}>
          <Link to="/meals" style={{ textDecoration: "none", color: "white" }}>
            MEALS
          </Link>
        </MyMenuButton>
      </MyMenuBox>
      <MyRightMenu>
        <TextField
          label="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon sx={{ color: "#fff" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <MyMenuButton variant="text" sx={{ fontWeight: "bold" }}>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            Login / Register
          </Link>
        </MyMenuButton>
      </MyRightMenu>
    </MyAppBar>
  );
}
