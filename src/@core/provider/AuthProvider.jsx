import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);

  const login = (token) => {
    // lấy token ở đây và call api /me để lấy thông tin user cập nhật lại vào state
    // setUser(..)

    sessionStorage.setItem("accessToken", "value");
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
