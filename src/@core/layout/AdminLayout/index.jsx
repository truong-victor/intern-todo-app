import { Box } from "@mui/material";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Navigate } from "react-router";

const AdminLayout = (props) => {
  const token = sessionStorage.getItem("accessToken");
  if (!token) {
    sessionStorage.clear();
    return <Navigate to={"/login"} />;
  }

  return (
    <Box className="relative flex ">
      <NavBar />
      <Box className="flex flex-col w-full">
        <Header />
        <Box className="w-full px-6 py-8 bg-[#e7e4e4]">{props.children}</Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
