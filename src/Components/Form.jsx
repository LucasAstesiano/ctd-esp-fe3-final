import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const[enviado, setEnviado]=useState(false);
  const [error,setError]= useState(false)

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleTextChange= (event)=>{
    setText(event.target.value)
  }

  function validarEmail(email) {
    const validacion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    return validacion.test(email);
  }
  

  const handleSubmit = (event) => {  
    event.preventDefault();
    if (nombre.length > 5 && validarEmail(email)) {
      setEnviado(true)
      setError(false) 
    }else{
      setError(true)
    }

  };
  const cleanINput=()=>{
    setEmail("")
    setNombre("")
    setText("")
    setEnviado(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-contact">
      <div>
          <label htmlFor="nombre">Nombre  </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={handleNombreChange}
            onFocus={cleanINput}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Mensaje</label>
          <input
            type="Text"
            id="mensaje"
            name="mensaje"
            value={text}
            onChange={handleTextChange}
            required
          />
        </div>
        <div className="form-button">
          <button type="submit">Enviar</button>
        </div>
      </form>
      <div>
        {error === true ? <h3 style={{color:"red"}}>Verifique los datos ingresados</h3>:<></>}
        {enviado===true ? <h2>"Gracias {nombre} por comunicarte con nosotros"</h2> : <h2>Envianos tu mensaje</h2>}
      </div>
    </div>
  );
};

export default Form;


