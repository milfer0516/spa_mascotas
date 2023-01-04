import React from "react";
import { Link } from "react-scroll";
import email from "../../img/Footer/email.svg";
import whats from "../../img/Footer/whatsapp.svg";
import ig from "../../img/Footer/instagram.svg";
import call from "../../img/Footer/llamada.svg";
import direction from "../../img/Footer/direction.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="row" id="footer-info">
          <div className="col mb-4" id="description">
            <h5>Spa BubbleDog</h5>
            <p>
              Consentimos a tu peludo y te lo entregamos en su mejor versión.
            </p>
          </div>

          <div className="col mb-4" id="navigation">
            <h5>Navegación</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 "
                  activeClass="active"
                  to="main-inicio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 "
                  activeClass="active"
                  to="main-nosotros"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 "
                  activeClass="active"
                  to="main-servicios"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  Servicios
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 "
                  activeClass="active"
                  to="main-contactanos"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-4" id="contact">
            <h5>Contacto</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 ">
                <img
                  className="icon"
                  src={email}
                  alt="Logo correo electronico"
                />
                <Link className="contact-link" to="/">
                  BubbleDog@gmail.com
                </Link>
              </li>
              <li className="nav-item mb-2 ">
                <img className="icon" src={whats} alt="Logo whatsapp" />
                <Link className="contact-link" to="/">
                  +57 321 355 2654
                </Link>
              </li>
              <li className="nav-item mb-2 ">
                <img className="icon" src={ig} alt="Logo instagram" />
                <Link className="contact-link" to="/">
                  BubbleDog_10
                </Link>
              </li>
              <li className="nav-item mb-2 " to="/">
                <img className="icon" src={call} alt="Logo llamada" />
                <Link className="contact-link" to="/">
                  606 850 4020
                </Link>
              </li>
              <li className="nav-item mb-2 " id="direction" to="/">
                <img className="icon" src={direction} alt="Logo dirección" />
                <Link className="contact-link" to="/">
                  99 Caven Point Rd Jersey City
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="footer-copyright">
          <h6 className="text-center">Copyright ©2022 by BubbleDog </h6>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
