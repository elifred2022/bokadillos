import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <b>Usuario: </b>
        <p>{user.email}</p>
      </div>
    )
  );
};

// <img src={user.picture} alt={user.name} /> este para que se muestre una imagen pero lo veo incecesario
// <h2>{user.name}</h2> este para que muestre el correo del usuario
