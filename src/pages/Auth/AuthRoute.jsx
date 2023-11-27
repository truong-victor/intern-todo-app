import React from "react";

const LazyRegister = React.lazy(() => import("./pages/register"));

export const authRoute = [
  {
    path: "/register",
    component: <LazyRegister />,
  },
];
