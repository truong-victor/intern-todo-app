import React, { Suspense } from "react";
import { CircularProgress } from "@mui/material";
const LazyListProductPage = React.lazy(() =>
  import("./Product/pages/ListPage")
);
const LazyDetailProductPage = React.lazy(() =>
  import("./Product/pages/DetailPage")
);

export const adminRoute = [
  {
    path: "/admin/product",
    component: <LazyListProductPage />,
  },
  {
    path: "/admin/product/:id",
    component: <LazyDetailProductPage />,
  },

];
