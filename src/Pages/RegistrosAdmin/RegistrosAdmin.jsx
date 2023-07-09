import React, { useState, useEffect } from "react";
import "./RegistrosAdmin.css";
import { getAllProfiles, deleteProfile } from "../../Services/ApiCalls";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { userData } from "../userSlice";

const AllUsers = () => {
  // Declaracion de variables de estado

  // Estado que almacena la lista de usuarios
  const [users, setUsers] = useState([]); 
   // Estado que almacena los datos del usuario actual
  const credentialsRedux = useSelector(userData);
  // Variable que guarda el token de autenticacion
  const token = credentialsRedux?.credentials?.token; 

  // Efecto de lado que se ejecuta despues del primer renderizado
  useEffect(() => {
    // Llamada a la funcion getAllProfiles para obtener todos los perfiles de usuario
    getAllProfiles(token).then((res) => {
      // Actualiza el estado "users" con los datos obtenidos
      setUsers(res.data);
    });
  }, []);

  // Funcion para eliminar un usuario
  const handleDeleteUser = (userId) => {
    // Llamada a la funcion deleteProfile para eliminar el usuario con el ID especificado
    deleteProfile(userId, token)
      .then(() => {
        // Actualiza el estado "users" filtrando el usuario eliminado
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error("Error al eliminar el usuario", error);
      });
  };

  // Renderizado del componente
  return (
    <div className="vistaCompleta">
      <div className="cardsUsers">
        <h1>Todos los usuarios registrados</h1>
        {/* Comprueba si no hay usuarios registrados */}
        {users.length === 0 ? ( 
          // Muestra un mensaje si no hay usuarios
          <p>No hay usuarios registrados</p> 
        ) : (
          // Si hay usuarios registrados, muestra la lista de usuarios
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <div className="cardIndividual">
                  Nombre: {user.name}, Email: {user.email}, Teléfono: {user.telephoneNumber}
                  {/* Boton de eliminar usuario */}
                  <button onClick={() => handleDeleteUser(user.id)}>
                    Eliminar
                  </button>
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


