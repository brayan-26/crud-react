import { createContext, useState, useContext } from "react";
import { registerRequest, loginRequest } from "../api/auths";


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
  const [isAuthentcated, setIsAuthentcated] = useState(false);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthentcated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const signin = async(user)=>{
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthentcated(true);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        user,
        isAuthentcated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
