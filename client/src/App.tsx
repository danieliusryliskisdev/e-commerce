import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/publicPages/Register";
import { Login } from "./pages/publicPages/Login";
import { Home } from "./pages/publicPages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
