import React from 'react';
import axios from 'axios';
import './Home.css';
import { BotonCambiaVista } from "../../Common/BotonCambiaVista/BotonCambiaVista";


export const Home = () => {
    return(
        <div className="homeGeneral"> Soy Home
        <BotonCambiaVista
            path={'/Login'}
            name={'Login'}
        />    

        </div>
    )
}