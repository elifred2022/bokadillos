import React from "react";
import IMG from "../../imagenes/tequeBlack.PNG";

export const ProductosLista = () => {
  return (
    <>
      <h1 className="title">Productos</h1>
      <div className="productos">
        <div className="producto">
          <a href="#">
            <div className="producto_img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto__footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price">$570 precio mayor</p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al carrito</button>
            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
