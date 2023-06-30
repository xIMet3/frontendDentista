export const checkError = (name, value) => {
  switch (name) {
    case "email":
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
        return "Email inválido";
      }
      return "";

    case "password":
      if (value.length < 6) {
        return "La contraseña debe tener al menos 6 caracteres";
      }
      return "";

      break;

    default:
      console.log("Formato Inválido");
  }
};
