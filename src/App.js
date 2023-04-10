import React from "react";
import { Header } from "./componentes/Header";
//import { ProductosLista } from "./componentes/productos/index"; ////   <ProductosLista /> esto va en la funcion export*/
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./componentes/Carrito";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Carrito />
          <Paginas />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;

//https://www.youtube.com/watch?v=O-zxqT7RgrU&t=904s PRIMERA PARTE HEADER

// https://www.youtube.com/watch?v=iiuF7dYaWDo SEGUNDA PARTE quede minuto 37:12

// https://www.youtube.com/watch?v=qNexFZQrOg8&list=PLGnBVzbgpM74-N7qvQbjAUwv-FjRMUHN3&index=11 TERCERA PARTE INICIO 37:24

// https://www.youtube.com/watch?v=C-QruuxeoOg&t=31s PART 4

// no funcionan los Link react-router-dom automaticamente hay q refrescar

// no funciona el useEffect no deja almacenado localstorage al refrescar, archivo dataprovider.

// OJO; usando etiqueta a si funcionan los link perro con etiqueta Link de react router
// no funcionan. hay q refresacar para q funcione
