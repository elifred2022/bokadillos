import React from "react";
import Boka from "../../imagenes/logoBoka.png";
import { Link } from "react-router-dom";
// import { ProductosLista } from "../productos";<Link to="/productos">PRODUCTOS</Link>

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={Boka} alt="logo" width={150} />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item_total">0</span>
      </div>
    </header>
  );
};

/*  <div className="menu">
        <box-icon name="menu"></box-icon>
      </div>   esto es para el menu hamburguesa pero como no lo voy a utilizar por el momento se lo saque*/
