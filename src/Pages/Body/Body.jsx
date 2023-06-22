import React from "react";
import { Routes, Route} from 'react-router-dom'
import {Home} from '../Home/Home'
import { Login } from "../Login/Login";
export const Body = () => {
    return(
        <>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            

        </Routes>
        
        </>
    )
}