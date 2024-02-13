import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage"; 
import RegisterPage from "./page/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>main</p>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
