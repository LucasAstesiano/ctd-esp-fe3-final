
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'
import { useContext } from 'react';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, changeTheme}=useContext(ContextGlobal)
  return (
    <nav >
      <div>
        <img src="../images/ODONPLUS2.png" alt="logo" />
      </div>
      <div>
      <Link to="/" style={{background: theme.background, color:theme.font}}>Home</Link>
      <Link to="/contacto" style={{background: theme.background, color:theme.font}}>Contacto</Link>
      <Link to="/favs" style={{background: theme.background, color:theme.font}}>Favoritos</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme}>cambiar tema</button>
      </div>
    </nav>
  )
}

export default Navbar