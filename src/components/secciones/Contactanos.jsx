import React from "react";
import "./Contactanos.css";
import Iframe from "react-iframe";
import point from "../../img/Contactanos/GridPuntos_2.svg";
import triangle from "../../img/Contactanos/Polygon 1.svg";
import casa from "../../img/Contactanos/casa-perro.svg";
import dogMap from "../../img/Contactanos/perro_encima_de_mapa-tiny.png";
const contactanos = () => {
  return (
    <div>
      <section id="main-contactanos">
        <h2 className="text-center">Contáctanos</h2>
        <img id="point-decoration2" src={point} alt="Puntos decorativos" />
        <img id="triangle-blue" src={triangle} alt="Triangulo decorativo" />
        <div id="direction">
          <img id="logo-casa" src={casa} alt="Logo ubicación mascotas" />
          <p id="text-direction">
            99 Caven Point Rd Jersey City, NJ 07305 - EEUU.
          </p>
        </div>
        <img src={dogMap} id="dog-map" alt="Perro decorativo encima del mapa" />
        <Iframe
          id="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.816086640261!2d-74.0753437847837!3d40.700047946283945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250e317160d09%3A0x31c61e8f3033637c!2s99%20Caven%20Point%20Rd%2C%20Jersey%20City%2C%20NJ%2007305%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1661660954806!5m2!1ses!2sco"
          loading="lazy"
        ></Iframe>
        <form id="formContactanos">
          <input
            className="form-control"
            type="text"
            placeholder="Nombre:"
            aria-label="default input example"
          />
          <input
            className="form-control"
            type="number"
            placeholder="Celular:"
            aria-label="default input example"
          />
          <input
            className="form-control"
            type="text"
            placeholder="Correo:"
            aria-label="default input example"
          />
          <input
            className="form-control"
            id="msj"
            type="text"
            placeholder="Mensaje (Opcional):"
            aria-label="default input example"
          />
          <button type="submit" className="btn btn-warning" id="btn-contact">
            Enviar datos
          </button>
        </form>
      </section>
    </div>
  );
};

export default contactanos;
