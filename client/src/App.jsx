import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import ProtectedRouters from "./ProtectedRouters";
import TaskPage from "./page/TaskPage";
import TaskGetPage from "./page/TaskGetPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>main</p>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRouters />}>
            <Route path="/task" element={<TaskPage />} />
            <Route path="/task/get" element={<TaskGetPage />} />
            <Route path="task/get/id" element={<p>task get id</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
