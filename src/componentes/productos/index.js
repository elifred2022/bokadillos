import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";
import { ProductoItem } from "./ProductoItem";

export const ProductosLista = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;

  console.log(productos);

  return (
    <>
      <h1 className="title">Seccion de Productos</h1>
      <div className="productos">
        {productos.map((producto) => (
          <ProductoItem
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            category={producto.category}
            cantidad={producto.cantidad}
          />
        ))}
      </div>
    </>
  );
};

/*    <div className="producto">
          <a href="#">
            <div className="producto_img">
              <img src={IMG2} alt="" />
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
              <img src={IMG3} alt="" />
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
              <img src={IMG4} alt="" />
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
        </div>   eiminamos los ejemplos q sirvieron para maquetar la app nos quedamos con uno solo*/
