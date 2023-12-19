import React from "react";
const LazyHome = React.lazy(() => import("./home"));
import DetailProduct from "../../@core/layout/ShopLayout/DetailProduct/DetailProduct";
import ProductPayment from "../../@core/layout/ShopLayout/Pay/PayProduct";
import Cart from "./home/components/Cart";
import Declaration from "postcss/lib/declaration";

export const shopRoute = [
  {
    path: "/home",
    component: <LazyHome />,
  },

  {
    path: "home/product/:id",
    component:<DetailProduct/>
  },

  {
    path: "home/:name",
    component :<DetailProduct/>
  },

  {
    path: '/home/cart',
    component: <Cart/>
  },

  {
    path: '/home/icon',
    component: <Declaration/>
  },



];
