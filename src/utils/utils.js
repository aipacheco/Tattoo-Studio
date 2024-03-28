export const validator = (value, type) => {

  switch (type) {
    case "first_name":
      {
        if (typeof value !== "string") {
          return `El nombre tiene que estar formado por caracteres correctos (de la A a la Z).`
        }
        //si es menor de 3 letras
        if (value.length < 3) {
          return `El nombre tiene que ser mínimo de 3 letras.`
        }
        //si es mayor de 50 letras
        if (value.length > 50) {
          return `El nombre tiene que ser máximo 50 letras.`
        }
        return ""
      }
    case "last_name": {
      if (typeof value !== "string") {
        return `El apellido tiene que estar formado por caracteres correctos (de la A a la Z).`
      }
      //si es menor de 3 letras
      if (value.length < 3) {
        return `El apellido tiene que ser mínimo de 3 letras.`
      }
      //si es mayor de 50 letras
      if (value.length > 50) {
        return `El apellido tiene que ser máximo 50 letras.`
      }
      return ""
    }

    case "password": {
      if (value.length < 8 || value.length > 15) {
        return `La contraseña tiene que ser de mínimo 8 caracteres y máximo 15`
      }

      return ""
    }

    case "email": {
      //regex de email
      const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

      if (!validEmail.test(value)) {
        return "Formato de email inválido"
      }

      if (value.length < 0) {
        return "Tiene que introducir un email."
      }
      return ""
    }
    default:
      console.log("pues ok")
  }
}
