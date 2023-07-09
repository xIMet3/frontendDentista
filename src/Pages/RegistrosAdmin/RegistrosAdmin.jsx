import React, { useState, useEffect } from "react";
import "./RegistrosAdmin.css";
import { getAllProfiles, deleteProfile } from "../../Services/ApiCalls";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { userData } from "../userSlice";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const credentialsRedux = useSelector(userData);
  const token = credentialsRedux?.credentials?.token;

  useEffect(() => {
    getAllProfiles(token).then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handleDeleteUser = (userId) => {
    deleteProfile(userId, token)
      .then(() => {
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error("Error al eliminar el usuario", error);
      });
  };

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
                  <div className="userInfo">
                    <p>Nombre: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Teléfono: {user.telephoneNumber}</p>
                  </div>
                  <div className="buttonContainer">
                    <button onClick={() => handleDeleteUser(user.id)}>
                      Eliminar
                    </button>
                  </div>
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
