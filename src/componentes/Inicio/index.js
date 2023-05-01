import React from "react";
import Picture from "../../imagenes/tequeTable.PNG";
import Picture2 from "../../imagenes/tequeHeladera.png";
import Picture3 from "../../imagenes/tequeSalsa.PNG";
import Picture4 from "../../imagenes/tequeMonton.png";

import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="inicio">
      <div>
        <img src={Picture}></img>
      </div>

      <div>
        <h2 className="inicio__title">
          "Bokadillos" fabrica de tequeños al mayor, menor y mucho mas...
        </h2>
        <br></br>
        <h2>Historia</h2>
        <p>
          Somos una empresa familiar fundada en 2018 con el proposito de brindar
          al consumidor la sazon y calidad de productos elaborados con los
          mejores estandares y recetas originarias venezolanas.
        </p>
        <br />
        <p>Si quieres conocer todos nuestros productos clikea aca...</p>
        <Link to="/productos" className="seccion__productos">
          <h2>Seccion de Productos</h2>
        </Link>
        <br />
      </div>

      <div>
        <h2>Vision</h2>
        <p>lskjdvfksjvkwsjvlakjfslk!</p>
        <br />
        <h2>Valores</h2>
        <p>lskjdvfksjvkwsjvlakjfslk!</p>
      </div>
      <div>
        <img src={Picture2} className="pic2"></img>
      </div>
      <div>
        <img src={Picture3}></img>
      </div>

      <div>
        <h2>¿Que es un tequeños?</h2>
        <p>
          Tambien conocido como dedito, palito de queso, rollito de queso o
          tequeño es una preparación culinaria que consiste en una masa de
          harina de trigo frita, rellena de queso blanco o feta, entre otros
          rellenos.
        </p>
        <br />
        <p>
          Que ingredientes lleva? Harina de trigo, queso blanco, mozzarella,
          sal, agua.
        </p>
        <br />
      </div>

      <div>
        <h2>¿Como prepararlos?</h2>
        <p>
          Coccion al horno: Colocamos los tequeños sobre una bandeja de horno
          con papel o pintada con mantequilla y horneamos a 200ºC durante 17-20
          minutos hasta que estén doraditos. Si quieres unos tequeños más
          dorados puedes pincelarlos con huevo. Y una vez fuera del horno.. ¡A
          comérselos antes de que se enfríen!
        </p>
        <br />
        <p>
          Coccion fritos: precalentar el aceite previamente a fuego medio alto,
          cuidando de no quemar el aceite, al momento de freír los tequeños se
          baja la temperatura a medio, freír los tequeños volteándolos por
          espacio de 2 a 4 minutos hasta que se doren de manera uniforme. Si el
          queso comienza a ser visible hay que retirarlos del aceite. Al sacar
          los tequeños se colocan sobre un recipiente con papel absorbente, se
          dejan enfrían unos 2 minutos y servir.!
        </p>
      </div>
      <div>
        <img src={Picture4} className="pic2"></img>
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
