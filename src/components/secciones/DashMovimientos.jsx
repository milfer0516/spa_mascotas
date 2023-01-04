import React, { useState } from "react";
import { useEffect } from "react";
import logoEditar from "../../img/Dashboard/editar.svg";
import logoEliminar from "../../img/Dashboard/eliminar.svg";
import axios from "axios";

const DashMovimientos = () => {
  //Titulo modal
  const [title, setTitle] = useState("");
  //Enviar datos
  const form = document.getElementById("formMov");
  function enviarRegistro(e) {
    e.preventDefault();
    //Aqui Se envian los datos al servidor (API REST)
    if (title === "Añadir") {
      crearMovimiento();
    } else if (title === "Editar") {
      actualizarMovimiento();
    }
  }
  //Conección a la BD
  const URL_API = "http://localhost:4001/api/detallesServicio";
  //const direccionGet = "obtenerDetalle";
  const direccionPost = "crearDetalle";
  const direccionPut = "actualizar-movimiento";
  const direccionDelete = "borrar-movimiento";
  //Definir efecto de carga
  useEffect(() => {
    getMovimiento();
  }, []);
  //Metodo Get para obtener datos
  const [listaServicios, setListaServicios] = useState([]);
  const getMovimiento = async () => {
    const res = await axios.get(`${URL_API}/`);
    setListaServicios(res.data);
  };
  //Estado de datos
  const [idMovimiento, setIdMovimiento] = useState("");
  const [cedulaCliente, setCedulaCliente] = useState("");
  const [clienteNombre, setClienteNombre] = useState("");
  const [costoTotal, setCostoTotal] = useState("");
  const [servicioNombre, setServicioNombre] = useState("");
  //Metodo Post para crear datos
  const crearMovimiento = async () => {
    let movimiento = {
      cedulaCliente: cedulaCliente,
      clienteNombre: clienteNombre,
      costoTotal: costoTotal,
      servicioNombre: servicioNombre,
    };
    await axios.post(`${URL_API}/${direccionPost}`, movimiento);
    getMovimiento();
    form.reset();
  };
  //Metodo Put para editar datos
  const actualizarMovimiento = async () => {
    let movimiento = {
      cedulaCliente: cedulaCliente,
      clienteNombre: clienteNombre,
      costoTotal: costoTotal,
      servicioNombre: servicioNombre,
    };
    await axios.put(`${URL_API}/${direccionPut}/${idMovimiento}`, movimiento);
    getMovimiento();
    form.reset();
  };
  //Metodo Delete para eliminar datos
  const eliminarMovimiento = async () => {
    await axios.delete(`${URL_API}/${direccionDelete}/${idMovimiento}`);
    getMovimiento();
  };

  function editar(item) {
    setIdMovimiento(item._id);
    document.getElementById("cedulaCliente").value = item.id_cliente.cedula;
    document.getElementById("clienteNombre").value = item.id_cliente.nombre;
    document.getElementById("costoTotal").value =
      item.id_servicio.nombreServicio;
    document.getElementById("servicioNombre").value =
      item.id_servicio.costoServicio;
  }
  return (
    <div>
      <section>
        <div className="text">Lista de Movimientos</div>
        <button
          type="submit"
          className="btn btn-warning-dash"
          data-bs-toggle="modal"
          data-bs-target="#formMov"
          onClick={() => {
            setTitle("Añadir");
            setCedulaCliente("");
            setClienteNombre("");
            setCostoTotal("");
            setServicioNombre("");
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
                <th>C.C. Cliente</th>
                <th>Cliente</th>
                <th>Servicio</th>
                <th>Costo Total</th>
                <th>Fecha de Entrega</th>
                <th className="acciones">Acciones</th>
              </tr>
            </thead>
            {/* <!--Cuerpo--> */}
            <tbody className="tbody">
              {/* Listar datos en la tabla */}
              {listaServicios.map((item) => (
                <tr key={item._id}>
                  <td>{item.id_cliente.cedula}</td>
                  <td>{item.id_cliente.nombre}</td>
                  <td>{item.id_servicio.nombreServicio}</td>
                  <td>{item.id_servicio.costoServicio}</td>
                  <td>{item.fechaEntrega}</td>
                  <td className="button-table">
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#formMov"
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
                      data-bs-target="#exampleModalMov"
                      onClick={() => {
                        setIdMovimiento(item._id);
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
        id="exampleModalMov"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Eliminar Movimiento
              </h5>
            </div>
            <div className="modal-body">
              <span>¿Seguro que quiere eliminar el Movimiento?</span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  eliminarMovimiento();
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
        id="formMov"
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
              <p>C.C. Cliente</p>
              <input
                type="text"
                className="form-control-dash"
                name="cedulaCliente"
                id="cedulaCliente"
                onChange={(e) => {
                  setCedulaCliente(e.target.value);
                }}
              />
              <p>Cliente</p>
              <input
                type="text"
                className="form-control-dash"
                name="clienteNombre"
                id="clienteNombre"
                onChange={(e) => {
                  setClienteNombre(e.target.value);
                }}
              />
              <p>Servicio</p>
              <input
                type="text"
                className="form-control-dash"
                name="servicioNombre"
                id="servicioNombre"
                onChange={(e) => {
                  setServicioNombre(e.target.value);
                }}
              />
              <p>Costo Total</p>
              <input
                type="text"
                className="form-control-dash"
                name="costoTotal"
                id="costoTotal"
                onChange={(e) => {
                  setCostoTotal(e.target.value);
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                id="addMov"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                {title}
              </button>
              <button
                type="button"
                id="cancelMov"
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

export default DashMovimientos;
