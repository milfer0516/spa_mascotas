import React, { useState } from "react";
import { useEffect } from "react";
import logoEditar from "../../img/Dashboard/editar.svg";
import logoEliminar from "../../img/Dashboard/eliminar.svg";
import axios from "axios";

const DashClientes = () => {
  //Titulo modal
  const [title, setTitle] = useState("");
  //Enviar datos
  const form = document.getElementById("formSer");
  function enviarRegistro(e) {
    e.preventDefault();
    //Aqui Se envian los datos al servidor (API REST)
    if (title === "Añadir") {
      crearServicio();
    } else if (title === "Editar") {
      actualizarServicio();
    }
  }
  //Conección a la BD
  const URL_API = "http://localhost:4001/api/servicios";
  const direccionGet = "listar-servicio";
  const direccionPost = "crear-servicio";
  const direccionPut = "actualizar-servicio";
  const direccionDelete = "borrar-servicio";
  //Definir efecto de carga
  useEffect(() => {
    getServicios();
  }, []);
  //Metodo Get para obtener datos
  const [listaServicios, setListaServicios] = useState([]);
  const getServicios = async () => {
    const res = await axios.get(`${URL_API}/${direccionGet}`);
    setListaServicios(res.data);
  };
  //Estado de datos
  const [idServicio, setIdServicio] = useState("");
  const [nombreServicio, setnombreServicio] = useState("");
  const [costoServicio, setCostoServicio] = useState("");
  const [detalleServicio, setDetalleServicio] = useState("");
  //Metodo Post para crear datos
  const crearServicio = async () => {
    let servicio = {
      nombreServicio: nombreServicio,
      costoServicio: costoServicio,
      detalleServicio: detalleServicio,
    };
    await axios.post(`${URL_API}/${direccionPost}`, servicio);
    getServicios();
    form.reset();
  };
  //Metodo Put para editar datos
  const actualizarServicio = async () => {
    let servicio = {
      nombreServicio: nombreServicio,
      costoServicio: costoServicio,
      detalleServicio: detalleServicio,
    };
    await axios.put(`${URL_API}/${direccionPut}/${idServicio}`, servicio);
    getServicios();
    form.reset();
  };
  //Metodo Delete para eliminar datos
  const eliminarServicio = async () => {
    await axios.delete(`${URL_API}/${direccionDelete}/${idServicio}`);
    getServicios();
  };

  function editar(item) {
    setIdServicio(item._id);
    document.getElementById("nombreServicio").value = item.nombreServicio;
    document.getElementById("costoServicio").value = item.costoServicio;
    document.getElementById("detalleServicio").value = item.detalleServicio;
  }
  return (
    <div>
      <section>
        <div className="text">Lista de Servicios</div>
        <button
          type="submit"
          className="btn btn-warning-dash"
          data-bs-toggle="modal"
          data-bs-target="#formSer"
          onClick={() => {
            setTitle("Añadir");
            setnombreServicio("");
            setCostoServicio("");
            setDetalleServicio("");
          }}
        >
          Añadir
        </button>
        <div>
          <table className="table table-dark table-striped">
            {/* <!--Encabezado--> */}
            <thead>
              {/* <!--Fila--> */}
              <tr>
                {/* <!--Columna--> */}
                <th>Servicio</th>
                <th>Costo</th>
                <th>Detalles del Servicio</th>
                <th className="acciones">Acciones</th>
              </tr>
            </thead>
            {/* <!--Cuerpo--> */}
            <tbody className="tbody">
              {/* Listar datos en la tabla */}
              {listaServicios.map((item) => (
                <tr key={item._id}>
                  <td>{item.nombreServicio}</td>
                  <td>{item.costoServicio}</td>
                  <td>{item.detalleServicio}</td>
                  <td className="button-table">
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#formSer"
                      onClick={() => {
                        setTitle("Editar");
                        editar(item);
                      }}
                    >
                      <img src={logoEditar} alt="Editar" />
                    </button>
                    <button
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalSer"
                      onClick={() => {
                        setIdServicio(item._id);
                      }}
                    >
                      <img src={logoEliminar} alt="Eliminar" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* <!-- Modal Eliminar--> */}
      <div
        className="modal fade"
        id="exampleModalSer"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Eliminar Servicio
              </h5>
            </div>
            <div className="modal-body">
              <span>¿Seguro que quiere eliminar el Servicio?</span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  eliminarServicio();
                }}
              >
                Eliminar
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal Editar y Añadir --> */}
      <form
        onSubmit={enviarRegistro}
        className="modal fade"
        id="formSer"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="title">
                {title}
              </h5>
            </div>
            <div className="modal-body">
              <p>Servicio</p>
              <input
                type="text"
                className="form-control-dash"
                name="nombreServicio"
                id="nombreServicio"
                onChange={(e) => {
                  setnombreServicio(e.target.value);
                }}
              />
              <p>Costo del Servicio</p>
              <input
                type="text"
                className="form-control-dash"
                name="costoServicio"
                id="costoServicio"
                onChange={(e) => {
                  setCostoServicio(e.target.value);
                }}
              />
              <p>Detalles del Servicio</p>
              <input
                type="text"
                className="form-control-dash"
                name="detalleServicio"
                id="detalleServicio"
                onChange={(e) => {
                  setDetalleServicio(e.target.value);
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                id="addSer"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                {title}
              </button>
              <button
                type="button"
                id="cancelSer"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DashClientes;
