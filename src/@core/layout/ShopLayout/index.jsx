import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carousel from "../../../pages/Shop/home/components/Carousel/Carousel";
import PositionSticky from "../../../pages/Shop/home/components/postionsticky/postionsticky"
const ShopLayout = (props) => {

  const token = sessionStorage.getItem("accessToken");
  if (!token) {
    sessionStorage.clear();
    return <Navigate to={"/login"} />;
  }

  return (
    <Box className="relative flex flex-col">
      <Header />
      <PositionSticky/>
      <Box className="flex justify-center">
        <Box className="w-full lg:w-4/5  max-w-[1920px]">{props.children}</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ShopLayout;
