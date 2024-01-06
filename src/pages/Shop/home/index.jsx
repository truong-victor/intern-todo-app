import ShopLayout from "../../../@core/layout/ShopLayout";
import Slider from "./components/Slider";
import Product from "./components/product/Product";
import AlertImage from "../../../@core/layout/ShopLayout/components/AlertImage";
const Home = (props) => {
  return (
    <ShopLayout>
      <AlertImage/>
      <Slider />
      <Product />
    </ShopLayout>
  );
};

export default Home;
