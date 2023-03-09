import React from "react";
import Boka from "../../imagenes/logoBoka.png";

export const Header = () => {
  return (
    <header>
      <div className="menu">
        <box-icon name="menu"></box-icon>
      </div>
      <a href="#">
        <div className="logo">
          <img src={Boka} alt="logo" width={150} />
        </div>
      </a>
      <ul>
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="#">PRODUCTOS</a>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item_total">0</span>
      </div>
    </header>
  );
};
