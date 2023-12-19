import { Box } from "@mui/material";

import Layout from "../../../../pages/Shop/home/components/header";
import Carousel from "../../../../pages/Shop/home/components/Carousel/Carousel";
import NavBar from "../../../../pages/Shop/home/components/navbar";


const Header = () => {
  return <>
      <Box component="header">
        <Layout/>
        <NavBar/>
      </Box>
  </>

};

export default Header;
