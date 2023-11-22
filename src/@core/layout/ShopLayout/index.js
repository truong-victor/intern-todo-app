import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";

const ShopLayout = (props) => {
  return (
    <Box className="relative flex flex-col">
      <Header />

      <Box className="flex justify-center">
        <Box className="w-full lg:w-4/5  max-w-[1920px]">{props.children}</Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default ShopLayout;
