import "./App.css";

import { Header } from "./components/header/Header";
import { About } from "./pages/about/About";
import { Fotter } from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/form/Login";
import { Register } from "./pages/form/Register";
import { Tour } from "./pages/tour/Tour";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour/:id" element={<Tour />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
