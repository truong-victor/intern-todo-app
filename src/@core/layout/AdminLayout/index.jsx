import { Box } from "@mui/material";
import Footer from "./components/Footer";
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

      <Box className="flex justify-between px-[140px]">
        <Box className="w-[70%]">{props.children}</Box>
        <NavBar />
      </Box>

      <Footer/>
    </Box>
  );
};

export default AdminLayout;
