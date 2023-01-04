import React, { useState } from "react";
import "./Login.css";
import logo from "../../img/logo.svg";
import email from "../../img/Login/email.svg";
import whats from "../../img/Login/whatsapp.svg";
import ig from "../../img/Login/instagram.svg";
import call from "../../img/Login/llamada.svg";
import { Link, useNavigate } from "react-router-dom";
//import Dashboard from "./Dashboard";
import axios from "axios";

const Login = () => {
  /* const [miLogin, setMiLogin] = useState("false");
  const [miUser, setMiUser] = useState("");
  const [miPass, setMiPass] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();
    let usuario = document.getElementById("txtusu").value;
    let contrasena = document.getElementById("txtpass").value;
    if (usuario.length === 0 || contrasena.length === 0) {
      alert("Complete los datos de manera correcta");
    } else {
      if (miUser === "admin" && miPass === "123") {
        setMiLogin("true");
        document.getElementById("elem_login").style.display = "none";
      } else {
        setMiLogin("false");
        alert("Error de usuario y/o contraseña!!!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpass").value = "";
        document.getElementById("txtusu").focus();
      }
    }
  } */

  const history = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = async (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:4001/api/auth/iniciarSesion", {
        email: inputs.email,
        password: inputs.password,
      })
      .catch((error) => console.log(error));

    const data = await res.data;
    //console.log(data);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest().then(() => history("/dashboard"));
  };

  return (
    <div>
      <section id="elem_login">
        <header id="header-login">
          <Link id="logo" to="/">
            <img src={logo} className="img-fluid" alt="Logo Spa BubbleDog" />
          </Link>
        </header>
        <section id="section-login">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              id="txtusu"
              onChange={handleChange}
              className="form-area"
              type="email"
              name="email"
              placeholder="Ingrese su email"
              aria-label="default input example"
            />
            <input
              id="txtpass"
              onChange={handleChange}
              className="form-area"
              type="password"
              name="password"
              placeholder="Contraseña:"
              aria-label="default input example"
            />
            <button
              type="submit"
              className="btn btn-warning login"
              /* onClick={iniciarSesion} */
            >
              Ingresar
            </button>
          </form>
        </section>
        <section id="bienvenido">
          <h2>¡Bienvenido!</h2>
          <p>Ingresa tus credenciales para entrar al dashboard</p>
          <Link className="icon">
            <img src={email} alt="Icono email" />
          </Link>
          <Link className="icon">
            <img src={whats} alt="Icono whatsapp" />
          </Link>
          <Link className="icon">
            <img src={ig} alt="Icono instagram" />
          </Link>
          <Link className="icon">
            <img src={call} alt="Icono llamada" />
          </Link>
        </section>
      </section>
      {/* {miLogin === "true" && <Dashboard />} */}
    </div>
  );
};

export default Login;
