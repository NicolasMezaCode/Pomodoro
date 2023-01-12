import React from "react";
import { useState,useContext} from "react";

const ColorContext = React.createContext();

export function useColor(){
    return useContext(ColorContext);
}

const theme = {
    primary: {
        main:'#C94E77',
        darker:'#AA325A'
    },
    secondary: {
        main:'#005F87',
        darker:'#024D6C'
    },
    tertiary: {
        main:'#2E8375',
        darker:'#156B5D'
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