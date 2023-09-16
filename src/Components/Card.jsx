import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";

import { ContextGlobal} from "./utils/global.context";

const Card = () => {
  const {theme} =useContext(ContextGlobal)


  const [dentistas,setDentistas]= useState([]);
  const [favs,setFavs]= useState([])

  const url= "https://jsonplaceholder.typicode.com/users"

  useEffect(()=>{
    fetch(url)
  .then(response =>{
    return response.json();
  })
  .then(data => {
    setDentistas(data)
  })
  }, [])


  const addFav = (dentist) => {
    // Agregar el dentista a favs en el estado
    setFavs([...favs, dentist]);
  };

  useEffect(() => {
    // Almacenar favs en localStorage cuando cambie
    localStorage.setItem("fav", JSON.stringify(favs));
  }, [favs]);

  return (
    <div className="card" >
        {/* En cada card deberan mostrar en name - username y el id */}
        {dentistas.map((dentista,index)=>(
        <div key={index} className="cadaCard" id="cada-card">
          <Link to={`/dentist/${dentista.id}`}  style={{background: theme.background, color:theme.font}}>
            <div className="doc" >
              <img src="./images/doctor.jpg" alt="Doctor"  style={{ maxWidth: '200px', height: 'auto' }}/>
            </div>
            <h2>{dentista.name}</h2>
            <h3>{dentista.username}</h3>
            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}  
            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          </Link>
            <button key={index} onClick={()=> {addFav(dentista)}} className="favButton">Add fav</button>
        </div>
        ))}
    </div>
  );
};

export default Card;
