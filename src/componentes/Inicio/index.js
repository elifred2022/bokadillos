import React from "react";
import Picture from "../../imagenes/tequeSalsa.PNG";
//import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="inicio">
      <div className="home_presentacion">
        <div className="description">
          <img src={Picture}></img>
          <p>
            <b>Que es un Tequeño? </b> Tambien conocido como dedito, palito de
            queso, rollito de queso o tequeño es una preparación culinaria que
            consiste en una masa de harina de trigo frita, rellena de queso
            blanco o feta, entre otros rellenos.
          </p>
          <br />
          <p>
            Que ingredientes lleva? Harina de trigo, queso blanco, mozzarella,
            sal, agua.
          </p>
          <br />
          <p>
            Coccion al horno: Colocamos los tequeños sobre una bandeja de horno
            con papel o pintada con mantequilla y horneamos a 200ºC durante
            17-20 minutos hasta que estén doraditos. Si quieres unos tequeños
            más dorados puedes pincelarlos con huevo. Y una vez fuera del
            horno.. ¡A comérselos antes de que se enfríen!
          </p>
          <br />
          <p>
            Coccion fritos: precalentar el aceite previamente a fuego medio
            alto, cuidando de no quemar el aceite, al momento de freír los
            tequeños se baja la temperatura a medio, freír los tequeños
            volteándolos por espacio de 2 a 4 minutos hasta que se doren de
            manera uniforme. Si el queso comienza a ser visible hay que
            retirarlos del aceite. Al sacar los tequeños se colocan sobre un
            recipiente con papel absorbente, se dejan enfrían unos 2 minutos y
            servir.!
          </p>
        </div>
      </div>
    </div>
  );
};

/*  links a otras componentes;

 <Link to="/productos">
          <h1>Seccion de Productos</h1>
        </Link>

        <Link to="/Contactos">
          <h1>Contactenos</h1>
        </Link>

        */
