import React from "react";
import Picture from "../../imagenes/mapa.JPG";
import { Link } from "react-router-dom";

export const Contactos = () => {
  return (
    <div className="contactos">
      <div className="home_presentacion">
        <form className="formulario">
          <ul>
            <label>
              <p>Nombres y apellidos</p>
              <input
                type="text"
                id="nombre"
                placeholder="tu nombe"
                autocomplete="name"
                required
              />
            </label>
            <label>
              <p>Email</p>
              <input
                type="email"
                id="correo"
                placeholder="ej; soyelmejorcliente@gmail.com"
                required
              />
            </label>
            <label>
              <p>Deje su mensaje</p>
              <textarea></textarea>
            </label>
            <div className="buttom">
              <button className="btn">Enviar mensaje</button>
            </div>
          </ul>
        </form>

        <img src={Picture}></img>

        <Link to="/productos">
          <h1>Nuestros Productos</h1>
        </Link>

        <Link to="/">
          <h1>Inicio</h1>
        </Link>
      </div>

      <div className="description">
        <p>
          <b>Email </b> elifredmason@gmail.com
        </p>
        <br />
        <p>
          Nuestra base operativa se encuentra en yapeyu 795 villa Sarmiento
          Moron
        </p>
        <br />
        <p>Redes sociales; @bokadillosweb</p>
        <br />
      </div>
    </div>
  );
};

// https://www.youtube.com/watch?v=SrC1EaIBdUI formulario
