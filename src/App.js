import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navegacion/Navbar";
import Inicio from "./components/secciones/Inicio";
import Nosotros from "./components/secciones/Nosotros";
import Servicios from "./components/secciones/Servicios";
import Contactanos from "./components/secciones/Contactanos";
import Footer from "./components/secciones/Footer";
import Login from "./components/secciones/Login";
import Register from "./components/secciones/Register";
import Dashboard from "./components/secciones/Dashboard";
import DashMovimientos from "./components/secciones/DashMovimientos";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={landing()}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/detallesServicio" element={<DashMovimientos />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
function landing() {
  return (
    <div>
      <Navbar />
      <Inicio />
      <Nosotros />
      <Servicios />
      <Contactanos />
      <Footer />
    </div>
  );
}
export default App;
