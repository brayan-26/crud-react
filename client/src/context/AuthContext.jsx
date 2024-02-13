import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auths";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.log("no tengo context");
  }
  return context;
};

// ------------------------------
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (user) => {

    const res = await registerRequest(user);
    setUser(res.data);
  };
  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
