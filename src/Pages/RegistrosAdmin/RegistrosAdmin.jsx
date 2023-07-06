import React, { useState, useEffect } from "react";
import "./RegistrosAdmin.css";
import { getAllProfiles } from "../../Services/ApiCalls";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { userData } from "../userSlice";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const credentialsRedux = useSelector(userData);
  const token = credentialsRedux?.credentials?.token;
  console.log(users);

  useEffect(() => {
    getAllProfiles(token).then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="vistaCompleta">
      <div className="cardsUsers">
        <h1>Todos los usuarios registrados</h1>
        {users.length === 0 ? (
          <p>No hay usuarios registrados</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <div className="cardIndividual">
                  Nombre: {user.name}, Email: {user.email}, Teléfono:{" "}
                  {user.telephoneNumber}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
