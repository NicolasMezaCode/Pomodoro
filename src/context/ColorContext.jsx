import React from "react";
import { useState,useContext} from "react";

const ColorContext = React.createContext();

export function useColor(){
    return useContext(ColorContext);
}

const theme = {
    primary: {
        main:'#C94E77',
        darker:'#da0049',
        backgroundButton:'#AA325A'
    },
    secondary: {
        main:'#005F87',
        darker:'#2B93BE',
        backgroundButton:'#004C6B'
    },
    tertiary: {
        main:'#2E8375',
        darker:'#35B7A1',
        backgroundButton:'#1B5A4C'
    }
}

export default function ColorProvider({children}) {
    const [color,setColor] = useState(theme.primary);

    function changeColor(colorChange){
        const selectedColor = theme[colorChange];
        if(selectedColor){
            setColor(selectedColor);
        }
    }
    return (
        <ColorContext.Provider value={{color,changeColor}}>
            {children}
        </ColorContext.Provider>
    )
}