import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouters() {
  const { user, isAuthentcated } = useAuth();
  if (!isAuthentcated) return <Navigate to="/login" replace />;

  return <Outlet />;
}

export default ProtectedRouters;
