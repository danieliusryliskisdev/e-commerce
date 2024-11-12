import "./styles/styles.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/publicPages/Register";
import { Login } from "./pages/publicPages/Login";
import { Home } from "./pages/publicPages/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
