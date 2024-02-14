import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auths";

export const AuthContext = createContext();
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.log("no hay contexto");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthentcated, setIsAuthentcated] = useAuth(false);

  const signup = async (user) => {
    const res = await registerRequest(user);
    console.log(res.data);
    setUser(res.data);
    setIsAuthentcated(true);
  };
  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthentcated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
