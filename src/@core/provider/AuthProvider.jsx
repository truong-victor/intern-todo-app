import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../../pages/Auth/services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const login = async () => {
    try {
      const userInfo = await authService.getInfo();
      if (window.location.pathname === "/login") {
        navigate("/admin/product");
      }
      setUser(userInfo?.data);
    } catch (error) {
      toast.error("Vui lofng dang nhap");
      navigate("/login");
    }
  };

  useEffect(() => {
    const localToken = sessionStorage.getItem("accessToken");
    if (localToken) {
      login();
    }
  }, []);

  const logout = () => {
    navigate("/");
    setUser(null);
    setToken(null);
    sessionStorage.clear();
  };

  
  const context = {
    token,
    setToken,
    logout,
    user,
    login,
    ...props,
  };

  return (
    <AuthContext.Provider value={{ ...context }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
