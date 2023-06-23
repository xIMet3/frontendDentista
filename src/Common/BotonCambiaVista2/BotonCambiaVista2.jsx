import React from "react";
import './BotonCambiaVista2.css'
import { useNavigate } from "react-router-dom";


export const BotonCambiaVista2 = ({path, name}) => {
    
    const navigate = useNavigate()
    
    return(
        <div className="botonCambiaVista2Design" onClick = {() => navigate (path)}>
            {name}
        </div>
    )
}