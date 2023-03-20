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
            <h1>Docena de Tequeños congelados</h1>
            <p>Refrigerados</p>
            <p className="price">$630 precio al mayor</p>
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

        <div className="producto">
          <a href="#">
            <div className="producto_img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto__footer">
            <h1>Docena de Tequeños congelados</h1>
            <p>Refrigerados</p>

            <p className="price">$780 precio al menor</p>
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

        <div className="producto">
          <a href="#">
            <div className="producto_img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto__footer">
            <h1>Docena de Tequeños fritos + rica sala de ajo</h1>
            <p>Coccion</p>

            <p className="price">$1500 </p>
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

        <div className="producto">
          <a href="#">
            <div className="producto_img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto__footer">
            <h1>
              Combo fiestero; Cien "100" Tequeños fritos + rica sala de ajo
            </h1>
            <p>Coccion</p>

            <p className="price">$12500</p>
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
