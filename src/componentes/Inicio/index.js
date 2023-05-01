import React from "react";
import Picture from "../../imagenes/tequePartido.png";
import Picture2 from "../../imagenes/tequeSalsa.PNG";
import Picture3 from "../../imagenes/tequeMonton.png";
import Picture4 from "../../imagenes/tequeCaja.png";

import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="inicio">
      <div>
        <img src={Picture} className="picture1"></img>
      </div>

      <div>
        <h1 className="inicio__title">
          "Bokadillos, es como comer en casa..."
        </h1>
        <br></br>
        <h2 className="inicio__title2">Historia</h2>
        <br />
        <p>
          En 2018, una familia apasionada por la cocina decidio que era hora de
          hacer realidad su sueño de tener su propio negocio de comida. Con su
          experiencia en la industria de la hospitalidad, sabían que querían
          crear algo especial y único que ofreciera a los clientes una
          experiencia gastronómica teniendo como protagonista el popular{" "}
          <b>Tequeño</b>. Así fue como nació "Bokadillos", un pequeño negocio de
          comida que se especializó en platillos de la cocina tradicional
          Venezolana. Desde el principio, la familia se comprometio a utilizar
          solo ingredientes frescos y de alta calidad, y a preparar cada
          platillo con la atención y el cuidado que merecía. Al principio, el
          negocio era modesto, y se centró en ofrecer su comida en pequeños
          eventos y reuniones privadas. Sin embargo, rápidamente se ganaron una
          base de clientes fieles que apreciaban la calidad y el sabor de sus
          platillos, y pronto empezaron a expandirse. Con el tiempo,
          "Bokadillos" comenzó a ofrecer sus servicios de catering en eventos
          corporativos y bodas, y abrieron una pequeña tienda para atender a los
          clientes que querían probar su comida en un entorno más casual. Cada
          platillo que ofrecían era una muestra de su pasión por la cocina, y su
          reputación se fue extendiendo. Hoy en día, "Bokadillos" es un negocio
          próspero que ha expandido su alcance y su menú. A pesar de su éxito,
          "Bokadillos" sigue comprometido con los valores que inspiraron su
          negocio desde el principio: calidad, autenticidad y pasión por la
          cocina. Y aunque han pasado ya varios años desde que empezaron, cada
          platillo que preparan todavía lleva un poco de la magia que los
          inspiró a comenzar este negocio en 2018.
        </p>
        <br />
        <p>Si quieres conocer todos nuestros productos clikea aca...</p>
        <Link to="/productos" className="seccion__productos">
          <h2>Seccion de Productos</h2>
        </Link>
        <br />
      </div>

      <div>
        <h2 className="inicio__title2">Vision</h2>
        <br />
        <p>
          La visión de nuestra empresa de comida es ser reconocidos como líderes
          en la industria gastronómica, ofreciendo una experiencia única y
          memorable a nuestros clientes. Queremos ser reconocidos por nuestro
          compromiso con la calidad y la frescura de nuestros ingredientes, así
          como por nuestra innovación en la creación de platos únicos y
          deliciosos. Nos esforzamos por satisfacer las necesidades y deseos de
          nuestros clientes, ofreciendo un servicio excepcional y un ambiente
          acogedor. Queremos ser una empresa comprometida con la comunidad,
          apoyando a productores locales y promoviendo prácticas sostenibles y
          responsables. En resumen, nuestra visión es ser una empresa de comida
          líder en la industria, reconocida por su compromiso con la calidad, la
          innovación y la satisfacción del cliente.
        </p>
        <br />
        <h2 className="inicio__title2">Valores</h2>
        <br />
        <p>
          Los valores de nuestra empresa de comida se basan en la calidad, la
          sostenibilidad y la pasión por la cocina: Calidad: Nos comprometemos a
          utilizar ingredientes frescos y de alta calidad en cada uno de
          nuestros platillos. Además, nos aseguramos de que nuestros procesos de
          preparación y cocina sean rigurosos y estén enfocados en garantizar la
          excelencia en todo lo que hacemos. Sostenibilidad: Nos preocupamos por
          el medio ambiente y trabajamos para reducir nuestro impacto en él.
          Utilizamos ingredientes locales y de temporada, y nos esforzamos por
          minimizar el desperdicio de alimentos y recursos. Pasión por la
          cocina: Nos encanta lo que hacemos y lo hacemos con pasión. Nos
          inspiramos en la cocina tradicional, pero también nos mantenemos al
          día con las últimas tendencias culinarias y técnicas de cocina.
          Además, nos encanta experimentar con nuevas combinaciones y sabores
          para ofrecer a nuestros clientes una experiencia única. Estos valores
          son fundamentales para nuestra empresa y guían todo lo que hacemos,
          desde la selección de ingredientes hasta la presentación de nuestros
          platillos.!
        </p>
      </div>
      <div>
        <img src={Picture2} className="pic2"></img>
      </div>
      <div>
        <img src={Picture3}></img>
      </div>

      <div>
        <h2 className="inicio__title2">¿Que es un tequeños?</h2>
        <br />
        <p>
          Tambien conocido como dedito, palito de queso, rollito de queso o
          tequeño es una preparación culinaria que consiste en una masa de
          harina de trigo frita, rellena de queso blanco o feta, entre otros
          rellenos.
        </p>
        <br />
        <h2 className="inicio__title2">¿Que ingredientes lleva?</h2>
        <br />
        <p>Harina de trigo, queso blanco, mozzarella, sal, agua.</p>
        <br />
      </div>

      <div>
        <h2 className="inicio__title2">¿Como prepararlos?</h2>
        <br />
        <p>
          <b>Coccion al horno:</b> Colocamos los tequeños sobre una bandeja de
          horno con papel o pintada con mantequilla y horneamos a 200ºC durante
          17-20 minutos hasta que estén doraditos. Si quieres unos tequeños más
          dorados puedes pincelarlos con huevo. Y una vez fuera del horno.. ¡A
          comérselos antes de que se enfríen!
        </p>
        <br />
        <p>
          <b>Coccion fritos:</b> Precalentar el aceite previamente a fuego medio
          alto, cuidando de no quemar el aceite, al momento de freír los
          tequeños se baja la temperatura a medio, freír los tequeños
          volteándolos por espacio de 2 a 4 minutos hasta que se doren de manera
          uniforme. Si el queso comienza a ser visible hay que retirarlos del
          aceite. Al sacar los tequeños se colocan sobre un recipiente con papel
          absorbente, se dejan enfrían unos 2 minutos y servir.!
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
