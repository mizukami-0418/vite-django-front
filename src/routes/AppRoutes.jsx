import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../layouts/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Footer from "../layouts/Footer";
import CalculateApp from "../pages/CalculateApp";

function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculate" element={<CalculateApp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
