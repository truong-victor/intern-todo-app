import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Navigate } from "react-router";

const AdminLayout = (props) => {
  const token = sessionStorage.getItem("accessToken");

  if (!token) {
    // Nếu không có token, chuyển hướng đến trang đăng nhập
    sessionStorage.clear();
    return <Navigate to={"/login"} />;
  }

  // Nếu có token, hiển thị giao diện trang admin
  return (
    <Box className="relative flex flex-col">
      <Header />

      <Box className="flex ">
        {/* // ADMIN NAVBAR */}

        <Box className="w-full">{props.children}</Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default AdminLayout;
