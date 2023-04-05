import React, { useContext } from "react";
import Card from "../../imagenes/tequeHeladera.png";
import { DataContext } from "../../context/Dataprovider";

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;

  const tooglefalse = () => {
    setMenu(false);
  };

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";

  const removeProducto = (id) => {
    if (window.confirm("¿Quieres suspender el producto?")) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carrito.splice(index, 1);
        }
      });
      setCarrito([...carrito]);
    }
  };

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="carrito__close" onClick={tooglefalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su carrito</h2>

        {carrito.map((producto) => (
          <div className="carrito__center">
            <div className="carrito__item">
              <img src={producto.image} alt="" />
              <div>
                <h3>{producto.title}</h3>
                <p className="price">${producto.price}</p>
              </div>
              <div>
                <box-icon name="up-arrow" type="solid"></box-icon>
                <p className="cantidad">{producto.cantidad} </p>
                <box-icon name="down-arrow" type="solid"></box-icon>
              </div>

              <div
                className="remove__item"
                onClick={() => removeProducto(producto.id)}
              >
                <box-icon name="trash"></box-icon>
              </div>
            </div>
          </div>
        ))}

        <div className="carrito__footer">
          <h3>Total: $1260</h3>
          <button className="btn">Pagar</button>
        </div>
      </div>
    </div>
  );
};
