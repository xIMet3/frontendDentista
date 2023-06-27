import React from "react";
import "./Login.css";
import {InputText} from '../../Common/InputText/InputText'
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/ApiCalls";
//import { login } from "../userSlice";
//import jwtDecode from "jwt-decode";
//import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";


export const Login = () => {
  return (
    <div className="loginGeneral">
      <div className="fondoPrincipal">
        <img src="./img/muelaTatoo.png" alt="" />
      </div>
      
    </div>

      // const [user, setUser] = useState ({
      //   email: "",
      //   password: "",
      // });

      // const dispatch = useDispatch()
      // const navigate = useNavigate()

      // const inputHandler = ({ target }) => {
      //   let { name, value } = target;
      //   setUser ((prevState)) => ({
      //     ...prevState,
      //     [name] : value
      //   });
      // }


  );
};
