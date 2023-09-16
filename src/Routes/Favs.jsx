import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favs = () => {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    // Usamos un evento personalizado para detectar cambios en localStorage
    const handleStorageChange = (e) => {
      if (e.key === "fav") {
        const data = JSON.parse(e.newValue);
        setFav(data || []);
      }
    };

    // Agregamos el evento para escuchar cambios en localStorage
    window.addEventListener("storage", handleStorageChange);

    // Cargamos los datos iniciales desde localStorage
    const data = JSON.parse(localStorage.getItem("fav"));
    if (data != null && data.length > 0) {
      setFav(data);
    }

  
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {fav.length > 0 ? (
          fav.map((dentista, index) => (
            <Link to={`/dentist/${dentista.id}`} >
            <div className="doc" >
              <img src="./images/doctor.jpg" alt="Doctor"  style={{ maxWidth: '200px', height: 'auto' }}/>
            </div>
            <h2>{dentista.name}</h2>
            <h3>{dentista.username}</h3>
            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}  
            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          </Link>
          ))
        ) : (
          <div className="fav-vacio">
            <h2>Aún no has agregado ningún dentista a favoritos</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Favs;
