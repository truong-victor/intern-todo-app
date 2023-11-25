import React, { Suspense } from "react";
import useAuthContext from "../../@core/provider/AuthProvider";
import { CircularProgress } from "@mui/material";
const LazyListProductPage = React.lazy(() =>
  import("./Product/pages/ListPage")
);
const LazyDetailProductPage = React.lazy(() =>
  import("./Product/pages/DetailPage")
);
const LazyHomePage = React.lazy(() => import("./Product/pages/home"));

export const adminRoute = [
  {
    path: "/admin/product",
    component: <LazyListProductPage />,
  },
  {
    path: "/admin/product/:id",
    component: <LazyDetailProductPage />,
  },
  {
    path: "/Admin/home",
    component: <LazyHomePage />,
  },
];
