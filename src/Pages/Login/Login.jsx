import React from "react";
import "./Login.css";
import {InputText} from '../../Common/InputText/InputText'
import { useNavigate } from "react-router-dom";
import { loginMe } from "../../Services/ApiCalls";



export const Login = () => {
  return (
    <div className="loginGeneral">
      <div className="fondoPrincipal">
        <img src="./img/muelaTatoo.png" alt="" />
      </div>
    </div>
  );
};
