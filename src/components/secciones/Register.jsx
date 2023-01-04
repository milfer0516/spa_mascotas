import React, { useState } from "react";
import "./Login.css";
import logo from "../../img/logo.svg";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
//import email from "../../img/Login/email.svg";
import whats from "../../img/Login/whatsapp.svg";
import ig from "../../img/Login/instagram.svg";
import call from "../../img/Login/llamada.svg";
//import Dashboard from "./Dashboard";

const Register = () => {
  /* const [miLogin, setMiLogin] = useState("false");
  const [miUser, setMiUser] = useState("");
  const [miEmail, setmiEmail] = useState("");
  const [miPass, setMiPass] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();
    let usuario = document.getElementById("txtusu").value;
    let contrasena = document.getElementById("txtpass").value;
    if (usuario.length === 0 || contrasena.length === 0 || ) {
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
  }
 */

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [miLogin, setMiLogin] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:4001/api/auth/registrarse", {
      username,
      email,
      password,
    });

    setRegister(true);
    setMiLogin(true);
  };

  if (register) {
    return <Navigate to={"/login"} />;
  }
  if (miLogin) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <section id="elem_login">
        <header id="header-login">
          <Link id="logo" to="/">
            <img src={logo} className="img-fluid" alt="Logo Spa BubbleDog" />
          </Link>
        </header>
        <section id="section-login">
          <h1>Registrarse</h1>
          <form onSubmit={onSubmit}>
            <input
              id="txtusu"
              onChange={(e) => setUsername(e.target.value)}
              className="form-area"
              type="text"
              placeholder="Usuario:"
              aria-label="default input example"
            />
            <input
              id="txtusu"
              onChange={(e) => setEmail(e.target.value)}
              className="form-area"
              type="email"
              placeholder="Email:"
              aria-label="default input example"
            />
            <input
              id="txtpass"
              onChange={(e) => setPassword(e.target.value)}
              className="form-area"
              type="password"
              placeholder="Contraseña:"
              aria-label="default input example"
            />
            <button
              type="submit"
              className="btn btn-warning login"
              /* onClick={iniciarSesion} */
            >
              Registarse
            </button>
            <Link
              to={"/Login"}
              className="btn btn-warning login"
              /* onClick={iniciarSesion} */
            >
              Ingresar
            </Link>
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
    </div>
  );
};

export default Register;
