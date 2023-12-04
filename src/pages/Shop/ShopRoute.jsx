import React from "react";
const LazyHome = React.lazy(() => import("./home"));
const LazyProductdetail = React.lazy(() => import("../../@core/layout/ShopLayout/components/chitietsanpham"));
export const shopRoute = [
  {
    path: "/",
    component: <LazyHome />,
  },
  {
    path: "/detailProduct/:id",
    component: <LazyProductdetail />,
  },
];
