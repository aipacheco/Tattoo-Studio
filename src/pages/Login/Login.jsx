import { useState } from "react"
import InputCustom from "../../components/Input/InputCustom"
import { NavbarCustom } from "../../components/Navbar/NavbarCustom"
import "./Login.css"
import Button from "../../components/Button/Button"

const Login = () => {
  const [user, setUser] = useState({
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
      <div className="form">
        <div className="col-12 col-md-6 col-lg-6">
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
          <Button text={"Login"} />
        </div>
      </div>
    </>
  )
}

export default Login
