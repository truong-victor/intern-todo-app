import React from 'react'
import { createContext, useContext, useState } from "react";
import { authService } from "../../pages/Auth/services/authService";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { shopProductService } from "../../../src/pages/Shop/services/shopProductService";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = (props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);



  const login = async (token) => {
    try {
      console.log(token);

      // Gọi AuthService để lấy thông tin người dùng
      const response = await authService.providerApi(token);
      console.log(response.data);
      // Cập nhật thông tin người dùng vào state sử dụng setUser
      setUser(response.data);

      // Lưu token vào sessionStorage
      sessionStorage.setItem("accessToken", token);
      if (window.location.pathname === "/login") {
        navigate("/admin/listproduct");
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Xử lý logic khi có lỗi trong quá trình đăng nhập hoặc lấy thông tin người dùng
    }
  };
  useEffect(() => {
    const localToken = sessionStorage.getItem("accessToken");
    if (localToken) {
      login(localToken);
    }
  }, []);

  const logout = () => {
    setUser(null);
    setToken(null);
    sessionStorage.clear();
    navigate("/login");
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
