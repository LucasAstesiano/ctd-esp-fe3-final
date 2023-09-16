import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Contact from './Routes/Contact'
import Details from './Routes/Detail'
import Favs from './Routes/Favs'
import Home from './Routes/Home'
import { ContextGlobal,themes }  from "./Components/utils/global.context";
import Layout from "./Layout";
import { useState } from "react";


function App() {
  const [theme,setTheme]=useState(themes.claro)
  const changeTheme=()=>{
    setTheme((prevTheme)=>(prevTheme === themes.claro ? themes.oscuro : themes.claro))
  }
  return (
    <ContextGlobal.Provider value={{theme,changeTheme}}>
      <Layout>
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dentist/:id' element={<Details/>} />
                <Route path='/contacto' element={<Contact/>} />
                <Route path='/favs' element={<Favs/>} />
              </Routes>
            <Footer/>
          </BrowserRouter>
      </Layout>  
    </ContextGlobal.Provider>
  );
}

export default App;
