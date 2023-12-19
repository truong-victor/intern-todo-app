import { Route, Routes } from "react-router-dom";

import AddProductForm from "../pages/Admin/Product/pages/DetailPage/AddProductFile";

import { shopRoute } from "../pages/Shop/ShopRoute";
import { adminRoute } from "../pages/Admin/AdminRoute";
import { authRoute } from "../pages/Auth/AuthRoute";
import React, { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import Address from "../pages/Shop/home/components/provinceApi/Address";
const errorRoute = [
  {
    path: "/404",
    component: <>404 PAGE</>,
  },
];

const AppRouter = (props) => {
  const appRoute = [...authRoute, ...shopRoute, ...adminRoute, ...errorRoute];
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <CircularProgress />
        </div>
      }
    >
      <Routes>
        {appRoute.map((item, index) => (
          <Route key={index} path={item.path} element={item.component} />
        ))}
      </Routes>


    </Suspense>
  );
};
export default AppRouter;
