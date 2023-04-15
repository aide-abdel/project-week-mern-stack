import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const MyAppBar = styled(Box)({
  display: "flex",
  maxWidth: "xl",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#000",
  color: "#fff",
  height: "5em",
});
export const MyLogoBox = styled(Box)({
  flexGrow: "1",
  display: "flex",
});
export const MyMenuBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  flexGrow: "4",
  height: "100%",
});
export const MyMenuButton = styled(Button)({
  color: "#fff",
  fontSize: "1.2em",
});

export const MyRightMenu = styled(Box)({
  display: "flex",
  flexGrow: "1",
  marginLeft: "2em",
});
