import ShopLayout from "../../../@core/layout/ShopLayout";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
const Product = (props) => {
  return (
    <ShopLayout>
      <Filter/>
        <ProductList/>
    </ShopLayout>
  );
};

export default Product;
