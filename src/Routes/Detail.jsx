import React, { useState } from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {id} = useParams();
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentista,setDentista]= useState({});
  const url= `https://jsonplaceholder.typicode.com/users/${id}`

    
    fetch(url)
    .then(response =>{
      return response.json();
  })
  .then(data => {
    setDentista(data)
  })

  return (
    <>
    <h1>Detail Dentist {dentista.id} </h1>
          <div className="doc" >
              <img src="../images/doctor.jpg" alt="Doctor"  style={{ maxWidth: '200px', height: 'auto' }}/>
          </div>
    <table className='detail'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th> Phone</th>
          <th> Website</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{dentista.name}</td>
          <td>{dentista.email}</td>
          <td>{dentista.phone}</td>
          <td>{dentista.website}</td>
        </tr>
      </tbody>

    </table>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail
      /*<h1>Detail Dentist id </h1>
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico *}
        <div  className="cadaCard " >
          <div className="doc" >
              <img src="../images/doctor.jpg" alt="Doctor"  style={{ maxWidth: '200px', height: 'auto' }}/>
          </div>
          {dentista ===null ? <h2>Seleccione un dentista en la pestaña "Home"</h2> : 
          <div>
          <h2>{dentista.name}</h2>
          <p>{dentista.email}</p>
          <p>{dentista.phone}</p>
          <p>{dentista.website}</p>
          <p></p>
          <br />
          </div>
          }
        </div>
        */