import React from "react";
import "./Nosotros.css";
import groomer from "../../img/Nosotros/img-sobre-nosotros.png";
import circle from "../../img/Nosotros/Ellipse.png";
import circleOrange from "../../img/Nosotros/EllipseOrange.svg";

const nosotros = () => {
  return (
    <div>
      <section id="main-nosotros">
        <h2 className="text-center">Sobre nosotros</h2>
        <p>
          En BubbleDog nos comprometemos a darle a tu mejor amigo un espacio no
          solo lleno de amor sino también totalmente ajustado a sus necesidades.
          <br />
          Nuestro equipo está compuesto por destacados profesionales,
          reconocidos por brindarle a tu peludo el cuidado más adecuado.
          Nuestras instalaciones están diseñadas para proporcionarle a tu peludo
          la mejor experiencia posible en un ambiente relajado y agradable para
          él.
          <br />
          Nuestro gran amor por estos bellos animales que son parte de nuestra
          familia, nos impulsa cada día a mejorar y a encontrar la mejor manera
          de brindarles el cuidado necesario para que perduren por muchos años a
          nuestro lado disfrutando de bienestar y salud.
        </p>
        <img src={groomer} id="groomer" className="img-fluid" alt="Groomer" />
        <img
          src={circle}
          id="circle"
          className="img-fluid"
          alt="Circulo decorativo"
        />
        <img
          src={circleOrange}
          id="circleOrange"
          className="img-fluid"
          alt="Circulo decorativo"
        />
      </section>
    </div>
  );
};

export default nosotros;
