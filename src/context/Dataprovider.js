import React, { useState, useEffect, createContext } from "react";
import Data from "../Data";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [productos, setProdutos] = useState([]);
  const [menu, setMenu] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const producto = Data.items;

    if (producto) {
      setProdutos(producto);
    } else {
      setProdutos([]);
    }
  }, []);

  const addCarrito = (id) => {
    const check = carrito.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = productos.filter((producto) => {
        return producto.id === id;
      });
      setCarrito([...carrito, ...data]);
    } else {
      alert("El producto ya ha sido agregado");
    }
  };

  useEffect(() => {
    const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito"));
    if (dataCarrito) {
      setCarrito(dataCarrito);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCarrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    const getTotal = () => {
      const res = carrito.reduce((prev, item) => {
        return prev + item.price * item.cantidad;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [carrito]);

  const value = {
    productos: [productos],
    menu: [menu, setMenu],
    addCarrito: addCarrito,
    carrito: [carrito, setCarrito],
    total: [total, setTotal],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
