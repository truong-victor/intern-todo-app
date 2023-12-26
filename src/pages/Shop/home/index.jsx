import ShopLayout from "../../../@core/layout/ShopLayout";
import Slider from "./components/Slider";
import Product from "./components/product/Product";
const Home = (props) => {
  return (
    <ShopLayout>
      <Slider />
      <Product />
    </ShopLayout>
  );
};

export default Home;
