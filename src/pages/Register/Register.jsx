import Button from "../../components/Button/Button"
import InputCustom from "../../components/Input/InputCustom"
import { NavbarCustom } from "../../components/Navbar/NavbarCustom"
import "./Register.css"
import { useState, useEffect } from "react"

const Register = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  })

  const handleChange = ({ target }) => {
    setUser((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
    console.log(user)
  }

  return (
    <>
      <NavbarCustom />
      <div className="container container-register">
        <h1 className="">Registro de usuario</h1>
      </div>
      <div className="form">
        <div className="col-12 col-md-6 col-lg-6">
          <InputCustom
            label={"Nombre"}
            type={"text"}
            name={"first_name"}
            handleChange={handleChange}
          />
          <InputCustom
            label={"Apellidos"}
            type={"text"}
            name={"last_name"}
            handleChange={handleChange}
          />
          <InputCustom
            label={"Email"}
            type={"email"}
            name={"email"}
            handleChange={handleChange}
          />
          <InputCustom
            label={"Contraseña"}
            type={"password"}
            name={"password"}
            handleChange={handleChange}
          />
          <Button text={"Registrarse"} />
        </div>
      </div>
    </>
  )
}

export default Register
