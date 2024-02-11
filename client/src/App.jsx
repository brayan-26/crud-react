import { BrowserRouter, Routes, Route } from "react-router-dom";
import loginPage from "./page/loginPage.jsx";
import registerPage from "./page/registerPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>melo la prinipal</h1>} />
        <Route path="/login" element={< loginPage/>} />
        <Route path="/register" element={ <registerPage/>} />
        {/* <Route path="/task" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
