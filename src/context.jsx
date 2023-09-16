import { createContext } from "react";

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

const ThemeContext = createContext(themes.ligth);
export default ThemeContext;