import React, { useState } from "react";
import { useEffect } from "react";
import logoEditar from "../../img/Dashboard/editar.svg";
import logoEliminar from "../../img/Dashboard/eliminar.svg";
import axios from "axios";

const DashClientes = () => {
  //Titulo modal
  const [title, setTitle] = useState("");
  //Enviar datos
  const form = document.getElementById("form");
  function enviarRegistro(e) {
    e.preventDefault();
    //Aqui Se envian los datos al servidor (API REST)
    if (title === "Añadir") {
      crearCliente();
    } else if (title === "Editar") {
      actualizarCliente();
    }
  }
  //Conección a la BD
  const URL_API = "http://localhost:4001/api/clientes";
  const direccionGet = "listar-cliente";
  const direccionPost = "crear-clinte";
  const direccionPut = "actualizar-cliente";
  const direccionDelete = "borrar-cliente";
  //Definir efecto de carga
  useEffect(() => {
    getClientes();
  }, []);
  //Metodo Get para obtener datos
  const [listaCliente, setListacliente] = useState([]);
  const getClientes = async () => {
    const res = await axios.get(`${URL_API}/${direccionGet}`);
    setListacliente(res.data);
  };
  //Estado de datos
  const [idCliente, setIdCliente] = useState("");
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [nombreMascota, setNombreMascota] = useState("");
  const [raza, setRaza] = useState("");
  const [vacuna, setVacuna] = useState("");
  const [obseracion, setObseracion] = useState("");
  //Metodo Post para crear datos
  const crearCliente = async () => {
    let cliente = {
      cedula: cedula,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      email: email,
      nombreMascota: nombreMascota,
      raza: raza,
      vacuna: vacuna,
      obseracion: obseracion,
    };
    await axios.post(`${URL_API}/${direccionPost}`, cliente);
    getClientes();
    form.reset();
  };
  //Metodo Put para editar datos
  const actualizarCliente = async () => {
    let cliente = {
      cedula: cedula,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      email: email,
      nombreMascota: nombreMascota,
      raza: raza,
      vacuna: vacuna,
      obseracion: obseracion,
    };
    await axios.put(`${URL_API}/${direccionPut}/${idCliente}`, cliente);
    getClientes();
    form.reset();
  };
  //Metodo Delete para eliminar datos
  const eliminarCliente = async () => {
    await axios.delete(`${URL_API}/${direccionDelete}/${idCliente}`);
    getClientes();
  };

  function editar(item) {
    setIdCliente(item._id);
    document.getElementById("cedula").value = item.cedula;
    document.getElementById("nombre").value = item.nombre;
    document.getElementById("apellido").value = item.apellido;
    document.getElementById("celular").value = item.telefono;
    document.getElementById("correo").value = item.email;
    document.getElementById("nombre-mascota").value = item.nombreMascota;
    document.getElementById("raza-mascota").value = item.raza;
    document.getElementById("mascota-vacunada").value = item.vacuna;
    document.getElementById("observacion").value = item.obseracion;
  }
  return (
    <div>
      <section>
      
        <div className="text">Lista de Clientes</div>
        <button
          type="submit"
          className="btn btn-warning-dash"
          data-bs-toggle="modal"
          data-bs-target="#form"
          onClick={() => {
            setTitle("Añadir");
            setCedula("");
            setNombre("");
            setApellido("");
            setTelefono("");
            setEmail("");
            setNombreMascota("");
            setRaza("");
            setVacuna("");
            setObseracion("");
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
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Celular</th>
                <th>Correo electrónico</th>
                <th>Mascota</th>
                <th>Raza</th>
                <th>Vacuna</th>
                <th>Observación</th>
                <th className="acciones">Acciones</th>
              </tr>
            </thead>
            {/* <!--Cuerpo--> */}
            <tbody className="tbody">
              {/* Listar datos en la tabla */}
              {listaCliente.map((item) => (
                <tr key={item._id}>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.telefono}</td>
                  <td>{item.email}</td>
                  <td>{item.nombreMascota}</td>
                  <td>{item.raza}</td>
                  <td>{item.vacuna}</td>
                  <td>{item.obseracion}</td>
                  <td className="button-table">
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#form"
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
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        setIdCliente(item._id);
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
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Eliminar Cliente
              </h5>
            </div>
            <div className="modal-body">
              <span>¿Seguro que quiere eliminar el Cliente?</span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  eliminarCliente();
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
        id="form"
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
              <p>Cédula</p>
              <input
                type="text"
                className="form-control-dash"
                name="cedula"
                id="cedula"
                onChange={(e) => {
                  setCedula(e.target.value);
                }}
              />
              <p>Nombres</p>
              <input
                type="text"
                className="form-control-dash"
                name="nombre"
                id="nombre"
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
              />
              <p>Apellidos</p>
              <input
                type="text"
                className="form-control-dash"
                name="apellido"
                id="apellido"
                onChange={(e) => {
                  setApellido(e.target.value);
                }}
              />
              <p>Celular</p>
              <input
                type="text"
                className="form-control-dash"
                name="celular"
                id="celular"
                onChange={(e) => {
                  setTelefono(e.target.value);
                }}
              />
              <p>Correo Electrónico</p>
              <input
                type="text"
                className="form-control-dash"
                name="correo"
                id="correo"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div id="msg"></div>
              <p>Mascota</p>
              <input
                type="text"
                className="form-control-dash"
                name="nombreMascota"
                id="nombre-mascota"
                onChange={(e) => {
                  setNombreMascota(e.target.value);
                }}
              />
              <p>Raza</p>
              <input
                type="text"
                className="form-control-dash"
                name="razaMascota"
                id="raza-mascota"
                onChange={(e) => {
                  setRaza(e.target.value);
                }}
              />
              <p>Vacuna</p>
              <input
                type="text"
                className="form-control-dash"
                name="mascotaVacunada"
                id="mascota-vacunada"
                onChange={(e) => {
                  setVacuna(e.target.value);
                }}
              />
              <p>Observación</p>
              <input
                type="text"
                className="form-control-dash"
                name="observacion"
                id="observacion"
                onChange={(e) => {
                  setObseracion(e.target.value);
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                id="add"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                {title}
              </button>
              <button
                type="button"
                id="cancel"
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
