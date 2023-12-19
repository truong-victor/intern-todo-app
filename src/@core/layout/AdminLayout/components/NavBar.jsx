import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return <Box component="header" className="flex flex-col gap-4">
    <div>
      <Link to='/admin/product'>Quan ly san pham</Link><br /><br />
      <Link to="/admin/product/:id">Them san pham moi</Link>
    </div>
  </Box>;
};

export default NavBar;
