import React from "react";

const LazyListProductPage = React.lazy(() =>
  import("./Product/pages/ListPage")
); 

export const adminRoute = [
  {
    path: "/product",
    component: <LazyListProductPage />,
  },
];
