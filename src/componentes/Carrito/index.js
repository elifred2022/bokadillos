import React, { useContext } from "react";
import Card from "../../imagenes/tequeHeladera.png";
import { DataContext } from "../../context/Dataprovider";

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;

  const tooglefalse = () => {
    setMenu(false);
  };

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito chow" : "carito";

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="carrito__close" onClick={tooglefalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su carrito</h2>
        <div className="carrito__center">
          <div className="carrito__item">
            <img src={Card} alt="" />
            <div>
              <h3>Docena de Tequeños congelados</h3>
              <p className="price">$630</p>
            </div>
            <div>
              <box-icon name="up-arrow" type="solid"></box-icon>
              <p className="cantidad">1</p>
              <box-icon name="down-arrow" type="solid"></box-icon>
            </div>
            <div className="remove__item">
              <box-icon name="trash"></box-icon>
            </div>
          </div>
        </div>

        <div className="carrito__footer">
          <h3>Total: $1260</h3>
          <button className="btn">Pagar</button>
        </div>
      </div>
    </div>
  );
};
