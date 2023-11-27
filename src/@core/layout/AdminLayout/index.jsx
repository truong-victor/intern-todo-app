import { Box } from "@mui/material";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { useAuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router";

const AdminLayout = (props) => {
  const token = sessionStorage.getItem("accessToken");
  if (!token) {
    sessionStorage.clear();
    return <Navigate to={"/login"} />;
  }

  return (
    <Box className="relative flex flex-col">
      <Header />

      <Box className="flex ">
        <NavBar />
        <Box className="w-full">{props.children}</Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
