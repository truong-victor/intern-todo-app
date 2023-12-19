import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { authService } from "../../pages/Auth/services/authService";
import { toast } from "react-toastify";

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
      if (window.location.pathname === "/login" || window.location.pathname === "/Login") {
        navigate("/admin");
      }
    } catch (error) {
      toast.error("Vui dang nhap");
      navigate("/home");
    }

    // sessionStorage.setItem("accessToken", "value");
  };


  useEffect(() => {
    const localToken = sessionStorage.getItem("accessToken");
    if (localToken) {
      login();
    }
  }, []);

  const logout = () => {
    setUser(null);
    setToken(null);
    sessionStorage.clear();
  };

  const context = {
    token,
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
