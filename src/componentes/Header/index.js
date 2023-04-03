import React, { useContext } from "react";
import Boka from "../../imagenes/logoBoka.png";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";
// import { ProductosLista } from "../productos";<Link to="/productos">PRODUCTOS</Link>

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;

  console.log(menu);

  const toogleMenu = () => {
    setMenu(!menu);
  };

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
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item_total">0</span>
      </div>
    </header>
  );
};

/*  <div className="menu">
        <box-icon name="menu"></box-icon>
      </div>   esto es para el menu hamburguesa pero como no lo voy a utilizar por el momento se lo saque*/
