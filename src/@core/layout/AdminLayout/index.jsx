import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Navigate } from "react-router";

const AdminLayout = (props) => {
  const { token } = useAuthContext();

  if (!token) {
    sessionStorage.clear();
    return <Navigate to={"/login"} />;
  }

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
