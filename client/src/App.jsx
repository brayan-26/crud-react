import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage"; 
import RegisterPage from "./page/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>main</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
