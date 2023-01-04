import React from "react";
import "./Inicio.css";
import bone from "../../img/Hero/HuesoDecorarivo.png";
import vector1 from "../../img/Hero/Vector1.png";
import elemInicio from "../../img/Hero/elemento-inicio.svg";
import bubble1 from "../../img/Hero/BurbujaDecorativa2.png";
import bubble2 from "../../img/Hero/BurbujaDecorativa1.png";
import foot from "../../img/Hero/HuellaDecorativa.png";
import circle from "../../img/Hero/semi circulo.png";
import point from "../../img/Hero/puntos.svg";
import hero from "../../img/Hero/HeroIMG.png";
import blob from "../../img/Hero/blob.svg";
import vectorMovil from "../../img/Hero/VectorHeroMovil.svg";

const inicio = () => {
  return (
    <div>
      <section id="main-inicio">
        <div className="decoration-inicio">
          <img
            id="bone1"
            src={bone}
            className="img-fluid"
            alt="Hueso decorativo"
          />
          <img
            id="bone2"
            src={bone}
            className="img-fluid"
            alt="Hueso decorativo"
          />
          <img
            id="vector1"
            src={vector1}
            className="img-fluid"
            alt="Vector decorativo"
          />
          <img
            id="element-inicio"
            src={elemInicio}
            className="img-fluid"
            alt="Fondo superpuesto"
          />
          <img
            id="bubble1"
            src={bubble1}
            className="img-fluid"
            alt="Burbuja decorativa"
          />
          <img
            id="bubble2"
            src={bubble1}
            className="img-fluid"
            alt="Burbuja decorativa"
          />
          <img
            id="bubble3"
            src={bubble2}
            className="img-fluid"
            alt="Burbuja decorativa"
          />
          <img
            id="foot-dog"
            src={foot}
            className="img-fluid"
            alt="Huella decorativa"
          />
          <img
            id="circle-decoration"
            src={circle}
            className="img-fluid"
            alt="Medio circulo decorativa"
          />
          <img
            id="point-decoration"
            src={point}
            className="img-fluid"
            alt="Puntos decorativos"
          />
        </div>
        <div className="main-inicio-container">
          <div className="inicio-text">
            <h1>
              Dale <b>lo mejor</b>, a los que más te dan
              <b> amor</b>.
            </h1>
            <p>
              Tu peludito se merece los mejores mimos y el cuidado de la más
              alta calidad. Recuerda...
              <br />
              <b>¡Un peludito guapo, es un peludito felíz!</b>
            </p>
            <button type="button" className="btn btn-warning inicio">
              ¡Agenda Ahora!
            </button>
          </div>
          <div className="inicio-img">
            <img src={blob} alt="Vector decorativo" id="blob" />
            <img src={vectorMovil} alt="Vector decorativo" id="vectorMovil" />
            <img
              src={hero}
              className="img-fluid "
              alt="foto de perro en toalla"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default inicio;
