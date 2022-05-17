import React, { useEffect, useState } from "react";
import "../../_generales.scss";
import "./usuarios.scss";

const Usuarios = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.randomuser.me/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const userData = {
          name: data.results[0].name.first,
          email: data.results[0].email,
          picture: data.results[0].picture.thumbnail,
        };

        setUser(userData);
        setLoading(false);
      });
  }, []);

  return (
    <div className="todo">
      {loading ? (
        <div class="spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : null}
      {user ? (
        <div className="caja-datos">
          <div className="caja-img">
            <img src={user.picture} />
          </div>
          <div className="datos">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Usuarios;
