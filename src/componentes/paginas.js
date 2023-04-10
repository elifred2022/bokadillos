import React from "react";
import { Switch, Route } from "react-router-dom"; /* <Switch>
<Router path="/" exact component={Inicio} />
<Router path="/productos" exact component={ProductosLista} />
</Switch> */
import { Inicio } from "./Inicio/index";
import { ProductosLista } from "./productos/index";
import { ProductoDetalle } from "./productos/ProductoDetalle";

export const Paginas = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/productos" component={ProductosLista} />
        <Route exact path="/producto/:id" component={ProductoDetalle} />
      </Switch>
    </section>
  );
};
