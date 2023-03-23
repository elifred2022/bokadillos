import React from "react";
import { Header } from "./componentes/Header";
//import { ProductosLista } from "./componentes/productos/index"; ////   <ProductosLista /> esto va en la funcion export*/
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./componentes/Paginas";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Paginas />
      </Router>
    </div>
  );
}

export default App;

//https://www.youtube.com/watch?v=O-zxqT7RgrU&t=904s PRIMERA PARTE HEADER

// https://www.youtube.com/watch?v=iiuF7dYaWDo SEGUNDA PARTE quede minuto 37:12

// me voy a documentar porque no funcionan los Link automaticamente hay q refrescar
