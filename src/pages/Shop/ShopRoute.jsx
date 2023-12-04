import React from "react";
const LazyHome = React.lazy(() => import("./home"));
const LazyProduct = React.lazy(() => import("./product"));
const LazyDetailProduct = React.lazy(() => import("./detailProduct"));
const LazyCart = React.lazy(() => import("./cart"));

export const shopRoute = [
  {
    path: "/",
    component: <LazyHome />,
  },
  {
    path: "/product",
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
];
