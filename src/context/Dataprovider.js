import React, { useState, useEffect, createContext } from "react";
import Data from "../Data";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [productos, setProdutos] = useState([]);

  useEffect(() => {
    const producto = Data.items;

    if (producto) {
      setProdutos(producto);
    } else {
      setProdutos([]);
    }
  }, []);

  const value = {
    productos: [productos],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
