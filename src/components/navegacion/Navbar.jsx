import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Link as NewPage } from "react-router-dom";
import logo from "../../img/NavBar/Logo.svg";
import login from "../../img/NavBar/UserLogin.svg";
import email from "../../img/Footer/email.svg";
import whats from "../../img/Footer/whatsapp.svg";
import ig from "../../img/Footer/instagram.svg";

const Navbar = () => {
  const [btnClass, setBtnClass] = useState(false);
  function open() {
    setBtnClass((btnClass) => !btnClass);
  }
  let classCheck = btnClass ? " open" : "";
  return (
    <div>
      <nav className="navbar navbar-expand-lg  p-0 fixed-top navbar-center">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            activeClass="active"
            to="main-inicio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <img src={logo} className="img-fluid" alt="Logo Spa BubbleDog" />
          </Link>
          <button
            className={`navbar-toggler${classCheck}`}
            onClick={open}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-hambur"></span>
            <span className="icon-hambur"></span>
            <span className="icon-hambur"></span>
          </button>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="navbar-brand nav-link"
                  activeClass="active"
                  to="main-inicio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="navbar-brand nav-link"
                  activeClass="active"
                  to="main-nosotros"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="navbar-brand nav-link"
                  activeClass="active"
                  to="main-servicios"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="navbar-brand nav-link"
                  activeClass="active"
                  to="main-contactanos"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={200}
                >
                  Contáctanos
                </Link>
              </li>
              <li className="nav-logo">
                <img src={email} alt="Logo correo electronico" />
                <img src={whats} alt="Logo whatsapp" />
                <img src={ig} alt="Logo Instagram" />
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse d-flex justify-content-end">
            <NewPage id="login" to="/Register">
              <img
                src={login}
                className="img-fluid"
                alt="Logo iniciar sesion"
              />
            </NewPage>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
