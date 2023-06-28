import React from "react";
import "./Login.css";
import {InputText} from '../../Common/InputText/InputText'
import { useNavigate } from "react-router-dom";
//import { loginUser } from "../../Services/ApiCalls";
import { login } from "../userSlice";
//import jwtDecode from "jwt-decode";
//import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';



export const Login = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (

    <>
      <div className="loginGeneral">
        <div className="formularioLogin">
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Introduce email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    
    </>

   


  );
};



export default Login;
