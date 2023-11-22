import React from "react";
const LazyHome = React.lazy(() => import("./home"));

export const shopRoute = [
  {
    path: "/",
    component: <LazyHome />,
  },
];
