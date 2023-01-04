import React from "react";
import "./Carrusel.css";
import { Link } from "react-router-dom";
import baño from "../../img/Servicios/baño.svg";
import cepillado from "../../img/Servicios/cepillado-dientes.svg";
import deslanado from "../../img/Servicios/deslanado.svg";
import drenado from "../../img/Servicios/drenado-glandulas.svg";
import corte from "../../img/Servicios/corte-pelo.svg";
import uñas from "../../img/Servicios/corte-uñas.svg";

const Carrusel2 = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="cards-wrapper">
              <div className="card">
                <img
                  src={baño}
                  className="card-img-top"
                  id="img-card"
                  alt="Icono servicio baño"
                />
                <div className="card-body">
                  <div className="card-text-complet">
                    <h5 className="card-title">Baño</h5>
                    <h3 className="card-pricing">$10.000</h3>
                    <p className="card-text">
                      Limpia a tu peludo de ácaros, pulgas y garrapatas, además
                      de dejarlo con un pelaje brillante y sedoso.
                    </p>
                  </div>
                  <button className="btn btn-primary" as={Link} to="/">
                    Selecciona
                  </button>
                </div>
              </div>
              <div className="card">
                <img
                  src={cepillado}
                  className="card-img-top"
                  id="img-card"
                  alt="Icono servicio cepillado de dientes"
                />
                <div className="card-body">
                  <div className="card-text-complet">
                    <h5 className="card-title">Cepillado de dientes</h5>
                    <h3 className="card-pricing">$10.000</h3>
                    <p className="card-text">
                      Bríndale a tu peludo la sonrisa más brillante y saludable.
                    </p>
                  </div>
                  <button className="btn btn-primary" as={Link} to="/">
                    Selecciona
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <img
                  src={deslanado}
                  className="card-img-top"
                  id="img-card"
                  alt="Icono servicio deslanado"
                />
                <div className="card-body">
                  <div className="card-text-complet">
                    <h5 className="card-title">Deslanado</h5>
                    <h3 className="card-pricing">$10.000</h3>
                    <p className="card-text">
                      Elimina todo ese pelo muerto y deja a tu peludo libre de
                      nudos.
                    </p>
                  </div>
                  <button className="btn btn-primary" as={Link} to="/">
                    Selecciona
                  </button>
                </div>
              </div>
              <div className="card">
                <img
                  src={drenado}
                  className="card-img-top"
                  id="img-card"
                  alt="Icono servicio drenado de glandulas"
                />
                <div className="card-body">
                  <div className="card-text-complet">
                    <h5 className="card-title">Drenado de glándulas</h5>
                    <h3 className="card-pricing">$10.000</h3>
                    <p className="card-text">
                      Brinda bienestar a tu peludo, expulsando líquidos
                      indeseados.
                    </p>
                  </div>
                  <button className="btn btn-primary" as={Link} to="/">
                    Selecciona
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <img
                  src={corte}
                  className="card-img-top"
                  id="img-card"
                  alt="Icono servicio peluqueado"
                />
                <div className="card-body">
                  <div className="card-text-complet">
                    <h5 className="card-title">Peluqueado</h5>
                    <h3 className="card-pricing">$10.000</h3>
                    <p className="card-text">
                      Dale a tu peludo el mejor look al estilo Hollywood.
                    </p>
                  </div>
                  <button className="btn btn-primary" as={Link} to="/">
                    Selecciona
                  </button>
                </div>
              </div>
              <div className="card">
                <img
                  src={uñas}
                  className="card-img-top"
                  id="img-card"
                  alt="Icono servicio corte uñas"
                />
                <div className="card-body">
                  <div className="card-text-complet">
                    <h5 className="card-title">Corte de uñas</h5>
                    <h3 className="card-pricing">$10.000</h3>
                    <p className="card-text">
                      Recorta las garras de tu peludo para evitar accidentes.
                    </p>
                  </div>
                  <button className="btn btn-primary" as={Link} to="/">
                    Selecciona
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carrusel2;
