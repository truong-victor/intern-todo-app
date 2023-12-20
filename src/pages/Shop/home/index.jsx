import ShopLayout from "../../../@core/layout/ShopLayout";
import Slider from "./components/Slider";
import Product from "./components/product/Product";
const Home = (props) => {
  return (
    <div>
    <ShopLayout>
      <Slider />
      <Product />
      {/* <CoreUploadFile name="upload" type="file" /> */}
    </ShopLayout>

    </div>
  );
};

export default Home;
