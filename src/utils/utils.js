export const validator = (value, type) => {
  const regexString = /^[a-zA-Z]+$/
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

  switch (type) {
    case "first_name": {
      if (!regexString.test(value)) {
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
      if (!regexString.test(value)) {
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

//funcion para comprobar si un state tipo obj está relleno
export const CheckForm = (state) => {
  for (let elemento in state) {
    if (state[elemento] === "") {
      return false
    }
  }
  return true
}

export const checkAllEmpty = (obj) => {
  return Object.values(obj).every((value) => value === "")
}

export const customStyles = {
  headCells: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "rgb(94, 0, 0)",
      color: "rgb(236, 252, 246)", 
      fontSize: "1.3em"

    },
  },
  cells: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "rgb(236, 252, 246)", 
      fontSize: "1em"
    },
  },
}

