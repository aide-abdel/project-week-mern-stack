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
export default function AppbarDesktop({ matches }) {
  return (
    <MyAppBar>
      <MyLogoBox>
        <FitnessCenterIcon
          sx={{ fontSize: "3em", marginLeft: ".5em", marginRight: ".2em" }}
        />
        <Button variant="text" sx={{ color: "#fff", fontSize: "1.5em" }}>
          FITNESS PLANNER
        </Button>
      </MyLogoBox>
      <MyMenuBox>
        <PopupState variant="popover" popupId="calculator-popup">
          {(PopupState) => (
            <>
              <MyMenuButton variant="text" {...bindTrigger(PopupState)}>
                Calculator
              </MyMenuButton>
              <Menu {...bindMenu(PopupState)}>
                <MenuItem onClick={PopupState.close}>Body Mass Index</MenuItem>
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
        <MyMenuButton variant="text">Exercises</MyMenuButton>
        <MyMenuButton variant="text">Workouts</MyMenuButton>
        <MyMenuButton variant="text">Workout Plans</MyMenuButton>
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
        <MyMenuButton variant="text">Login / Register</MyMenuButton>
      </MyRightMenu>
    </MyAppBar>
  );
}
