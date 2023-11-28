import React from "react";

const LazyListProductPage = React.lazy(() =>
  import("./Product/pages/ListPage")
); 

const LazyhomeAdminPage = React.lazy(() =>
  import("./../../@core/layout/AdminLayout")
); 


const LazyAddProductAdmin = React.lazy(() =>
  import("./../../pages/Admin/Product/pages/DetailPage")
);



export const adminRoute = [
  {
    path: "/admin/listProduct",
    component: <LazyListProductPage />,
  },
  {
    path: "/admin",
    component: <LazyhomeAdminPage/>,
  },
  {
    path: "/admin/product/:id",
    component: <LazyAddProductAdmin/>,
  },
];
