import "./App.css";
import "bootstrap";
import Navbar from "./components/Navbar.js";
import Homescreen from "./pages/Homescreen.js";
import CartScreen from "./pages/CartScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterScreen from "./pages/RegisterScreen";
import LoginScreen from "./pages/LoginScreen";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
