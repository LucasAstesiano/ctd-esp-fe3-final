import { createContext, useEffect, useState} from "react";

export const themes = {
  claro:{
      font: 'black',
      background: 'white'
  },
  oscuro:{
      font: 'white',
      background: '#4B4B4B'
    }
  }
  
  export const ContextProvider=({children})=>{
  const url= "https://jsonplaceholder.typicode.com/users"
  const [dentistas,setDentistas]=useState([])

  useEffect(()=>{
    fetch(url)
    .then(response =>{
      return response.json();
    })
    .then(data =>{
      setDentistas(data)
    })
  },[])

  return(
    <ContextGlobal.Provider value={{dentistas}}>
      {children}
    </ContextGlobal.Provider>
  )
  

}

export const ContextGlobal = createContext(themes.claro);

