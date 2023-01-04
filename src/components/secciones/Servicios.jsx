import React from "react";
import "./Servicios.css";
import triangle from "../../img/Servicios/Polygon 2.svg";
import Carrusel3 from "../carrusel/Carrusel3";
import Carrusel2 from "../carrusel/Carrusel2";
import Carrusel1 from "../carrusel/Carrusel1";

const servicios = () => {
  let pantalla = window.screen.availWidth;
  console.log(pantalla);
  function validarPantalla() {
    if (pantalla > 991) {
      return <Carrusel3 />;
    } else if ((pantalla > 767) & (pantalla < 992)) {
      return <Carrusel2 />;
    } else if (pantalla < 768) {
      return <Carrusel1 />;
    }
  }

  return (
    <div>
      <section id="main-servicios">
        <img id="triangle-brown" src={triangle} alt="Vector decorativo" />
        <div className="servicios-text">
          <h2 className="text-center">Servicios & Precios</h2>
          <p className="text-center">
            Nuestros servicios no solo le proporcionan a tu amigo peludo un
            aspecto de la realeza sino también salud para conservar su
            felicidad.
          </p>
        </div>
        {validarPantalla()}
      </section>
    </div>
  );
};

export default servicios;
