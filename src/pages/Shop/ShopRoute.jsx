import React from "react";
const LazyHome = React.lazy(() => import("./home"));
const LazyProductdetail = React.lazy(() => import("../../@core/layout/ShopLayout/components/chitietsanpham"));
const CartItem = React.lazy(() => import("../../@core/layout/ShopLayout/components/CartItem"))
const Thanhtoan = React.lazy(() => import("../../@core/layout/ShopLayout/components/thanhtoan"))
export const shopRoute = [
  {
    path: "/",
    component: <LazyHome />,
  },
  {
    path: "/detailProduct/:id",
    component: <LazyProductdetail />,
  },
  {
    path: "/cartitem",
    component: <CartItem />,
  },
  {
    path: "/thanhtoan",
    component: <Thanhtoan/>,
  },
];
