import ShopLayout from "../../../@core/layout/ShopLayout";
import CustomSeparator from "../../../@core/layout/ShopLayout/components/BreadCrumbs";
// import CartItem from "./CartItem"
import CartList from "./CartList";
import CheckoutForm from "./CheckoutForm";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <ShopLayout>
      <div className="bg-[#e6e4e4] py-4">
        <div className="w-[80%] m-auto flex justify-between bg-white mb-3 px-6 py-2 text-[#464646] font-semibold ">
          <h1>Giỏ hàng của bạn</h1>
          <Link className="hover:text-[#007aff]" to={"/"}>
            {" "}
            {"<"} Mua thêm sản phẩm khác
          </Link>
        </div>
        <CartList />
        <CheckoutForm />
      </div>
    </ShopLayout>
  );
}
export default CartPage;
