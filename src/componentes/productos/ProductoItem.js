import React from "react";
import IMG from "../../imagenes/tequeBlack.PNG";

export const ProductoItem = ({ id, title, price, image, category }) => {
  return (
    <div className="producto">
      <a href="#">
        <div className="producto_img">
          <img src={image} alt={title} />
        </div>
      </a>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">$ {price}</p>
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
  );
};
