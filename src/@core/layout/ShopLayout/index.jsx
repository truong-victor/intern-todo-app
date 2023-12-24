import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CustomSeparator from "./components/BreadCrumbs";
import FixedBanner from "./components/FixedBanner";
import { useParams } from "react-router";
const ShopLayout = (props) => {
  return (
    <Box className="relative flex flex-col">
      <Header />
      {window.location.pathname == '/cart' ? (<CustomSeparator/>) : ''}
      <Box className="flex justify-center ">
        <Box className=" lg:w-4/5  max-w-[1920px]">{props.children}</Box>
      </Box>

      <FixedBanner/>

      <Footer />
    </Box>
  );
};

export default ShopLayout;
