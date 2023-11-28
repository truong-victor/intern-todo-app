import { createContext, useContext, useState } from "react";
import { authService } from "../../pages/Auth/services/authService";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = (props) => {
  const navigate = useNavigate() ; 

  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);

  const login = async (token) => {
    try {
      console.log(token);
      // Gọi AuthService để lấy thông tin người dùng
      const response = await authService.providerApi(token);
  
      // Cập nhật thông tin người dùng vào state sử dụng setUser
      setUser(response.data);
  
      // Lưu token vào sessionStorage
      sessionStorage.setItem("accessToken", token);
      navigate("/admin")
    } catch (error) {
      console.error('Error during login:', error);
      // Xử lý logic khi có lỗi trong quá trình đăng nhập hoặc lấy thông tin người dùng
    }
  };
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
