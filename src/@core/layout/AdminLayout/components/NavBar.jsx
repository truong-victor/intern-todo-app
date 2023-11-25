import { Box } from "@mui/material";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Box component="aside">
      <Link to="/Admin/DetailProduct">THEM SAN Pham</Link>
    </Box>
  );
};

export default NavBar;
