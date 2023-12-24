import React from "react";
const LazyHome = React.lazy(() => import("./home"));
const LazyProduct = React.lazy(() => import("./product"));
const LazyDetailProduct = React.lazy(() => import("./detailProduct"));
const LazyCart = React.lazy(() => import("./cart"));
const LazyBanner = React.lazy(() => import("./banner"));


export const shopRoute = [
  {
    path: "/",
    component: <LazyHome />,
  },
  {
    path: "/productList",
    component: <LazyProduct />,
  },
  {
    path: "/product/:id",
    component: <LazyDetailProduct />,
  },
  {
    path: "/cart",
    component: <LazyCart />,
  },
  {
    path: "/banner",
    component: <LazyBanner />,
  },
];
