import CoreUploadFile from "../../../@core/components/inputs/CoreUploadFile";
import ShopLayout from "../../../@core/layout/ShopLayout";
import Slider from "./components/Slider";
import Product from "./components/product/Product";
const Home = (props) => {
  return (
    <ShopLayout>
      <Slider />
      <Product />
      {/* <CoreUploadFile name="upload" type="file" /> */}
    </ShopLayout>
  );
};

export default Home;
