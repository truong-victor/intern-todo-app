import { useParams } from "react-router";
import ShopLayout from "../../../@core/layout/ShopLayout";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import CoreTopProduct from "../../../@core/components/CoreTopProduct";
const Product = (props) => {
  const {name} = useParams()
  
  return (
    <ShopLayout>
      <img className="mt-4 rounded-md" src="/public/images/product/banner.jpg" alt="" />
      {/* <CoreTopProduct/> */}
      <Filter/>
      <ProductList name= {name}/>
    </ShopLayout>
  );
};

export default Product;
