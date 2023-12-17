import ShopLayout from "../../../@core/layout/ShopLayout";
import CartIteam from "./CartIteam";
import CheckForm from "./checkForm"; 
import { Link } from "react-router-dom";
function CartPage() {
  return (
    <ShopLayout>
      < CartIteam />
      <CheckForm/>
    </ShopLayout>
  );
}
export default CartPage;
