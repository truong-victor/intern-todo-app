import { createContext, useContext, useState } from "react";
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
      setUser(userInfo?.data);
      console.log(userInfo);
      if (window.location.pathname === "/Login") {
        console.log('11231');
        navigate("/admin/home");
      }
    } catch (error) {
      toast.error("Vui lofng dang nhap");
      navigate("/login");
    }

  };

  const logout = () => {
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
