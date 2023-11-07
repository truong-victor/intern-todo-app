import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const initUser = {
  email: null,
  token: null,
};

const AuthProvider = (props) => {
  const [user, setUser] = useState(initUser);

  const login = (token) => {
    // lấy token ở đây và call api /me để lấy thông tin user cập nhật lại vào state
    // setUser(..)
  };

  const context = {
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
