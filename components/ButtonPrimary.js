import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ButtonPrimary = styled(Button)(() => ({
  borderRadius: "30px",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: "400",
  width: "220px",
  marginTop: "1rem",
}));

export default ButtonPrimary;
