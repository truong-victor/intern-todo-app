import React, { Suspense } from "react";
import useAuthContext from "../../@core/provider/AuthProvider";
import { CircularProgress } from "@mui/material";
import DashBoard from "./Dashboard";
const LazyListProductPage = React.lazy(() =>
  import("./Product/pages/ListPage")
);

import DetailProductPage from "./Product/pages/DetailPage";

import ListProductPage from "./Product/pages/ListPage";
import DetailProductAdmin from "../../@core/layout/AdminLayout/Product/detailProduct";


export const adminRoute = [
  {
    path: "/admin",
    component: <DashBoard />,
  },
  {
    path: "/admin/product/:id",
    component: <DetailProductPage />,
  },

  {
    path: "/admin/product",
    component: <ListProductPage />,
  },

  {
    path:"/admin/product/detail/:id",
    component : <DetailProductAdmin/>,
  },
];