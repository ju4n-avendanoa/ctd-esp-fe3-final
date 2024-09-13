import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const currentFavs = JSON.parse(localStorage.getItem("favs")) || [];

    const isAlreadyFav = currentFavs.some((dentist) => dentist.id === id);

    if (!isAlreadyFav) {
      const newFav = { id, name, username };
      localStorage.setItem("favs", JSON.stringify([...currentFavs, newFav]));
      alert(`${name} ha sido agregado a favoritos`);
    } else {
      alert(`${name} ya está en favoritos`);
    }
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src="./../../public/images/doctor.jpg" alt="dentist" />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
