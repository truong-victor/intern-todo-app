import React from "react";

const LazyRegister = React.lazy(() => import("./pages/register"));

const LazyLogin = React.lazy(() => import("./pages/login"));


export const authRoute = [
  {
    path: "/register",
    component: <LazyRegister />,
  },
  {
    path: "/login",
    component: <LazyLogin />,
  },
];
