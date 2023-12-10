import React from "react";
const LazyHome = React.lazy(() => import("./home"));
const LazyProductdetail = React.lazy(() => import("../../@core/layout/ShopLayout/components/chitietsanpham"));
const CartItem = React.lazy(() => import("../../@core/layout/ShopLayout/components/CartItem"))
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
];
