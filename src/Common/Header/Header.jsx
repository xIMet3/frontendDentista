import React from "react";
import './Header.css'
import { BotonCambiaVista } from "../../Common/BotonCambiaVista/BotonCambiaVista";


export const Header = () => {
    return(
        <div className="headerGeneral">
            <div className="botonUno">
                <BotonCambiaVista
                path={'/Login'}
                name={'Login'}
                />
            </div>
            <div className="botonDos">
                <BotonCambiaVista
                path={'/LogOut'}
                name={'LogOut'}
            />     
            </div>
        </div>

    )
}