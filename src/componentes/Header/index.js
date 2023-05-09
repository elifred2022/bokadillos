import React, { useContext } from "react";
import Boka from "../../imagenes/logoBoka.png";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../User/Login";
import { LogoutButton } from "../User/Logout";
import { Profile } from "../User/Profile";
// import { ProductosLista } from "../productos";<Link to="/productos">PRODUCTOS</Link>

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  const toogleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={Boka} alt="logo" width={150} />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/Contactos">Contactenos</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item_total">{carrito.length}</span>
      </div>
      <li>
        {isAuthenticated ? (
          <>
            <Profile />

            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </li>
    </header>
  );
};

/*  <div className="menu">
        <box-icon name="menu"></box-icon>
      </div>   esto es para el menu hamburguesa pero como no lo voy a utilizar por el momento se lo saque*/

// <Link to="/Login">Login</Link> este es el link login

/*{isAuthenticated ? (
            <>
            <Profile />

            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
*/
