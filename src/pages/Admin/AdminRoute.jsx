import React from "react";
import ListProductPage from "./Product/pages/ListPage";

const LazyListProductPage = React.lazy(() =>
  import("./Product/pages/ListPage")
);

export const ProtectRouteAuth = (props) => {
  const { token } = useAuthContext();

  if (!token) {
    sessionStorage.clear();
    return <Navigate to={"/login"} />;
  }

  return props.children;
};

export const adminRoute = [
  {
    path: "/product",
    component: (
      <ProtectRouteAuth>
        <LazyListProductPage />
      </ProtectRouteAuth>
    ),
  },
];
