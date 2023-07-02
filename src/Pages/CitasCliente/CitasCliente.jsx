import React, { useState } from "react";
import "./CitasCliente.css";
import { createAppointment } from "../../Services/ApiCalls";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";

export const CitasCliente = () => {
  const { credentials } = useSelector(userData);
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const inputHandler = ({ target }) => {
    let { name, value } = target;
    setBody((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      createAppointment(credentials.token, body).then(
        (res) => {
          if(res.success) {
            navigate("/")
          }
        }
      ).catch(error => console.log(error))
    } catch(error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formCrearCita">
      <input className="camposCrearCita"
        type="datetime-local"
        name="date"
        onChange={(e) => inputHandler(e)}
      />

      <select name="treatment_id" onChange={(e) => inputHandler(e)} id="treatment">
        <option value="1">Limpieza bucal</option>
        <option value="2">Extraccion</option>
        <option value="3">Implante</option>
        <option value="4">Ortodoncia</option>
        <option value="5">Revisión bucal</option>
        <option value="6">Blanqueamiento dental</option>
      </select>

      <select name="doctor_id" onChange={(e) => inputHandler(e)} id="treatment">
        <option value="1">Jesus Vázquez</option>
        <option value="2">Carlos Redondo</option>
      </select>

      <button type="submit">Crear</button>
    </form>
  );
};
