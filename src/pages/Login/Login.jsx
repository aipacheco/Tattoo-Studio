import { useState } from "react"
import InputCustom from "../../components/Input/InputCustom"
import { NavbarCustom } from "../../components/Navbar/NavbarCustom"
import "./Login.css"
import Button from "../../components/Button/Button"
import { useNavigate } from "react-router-dom"
import { LoginUser } from "../../services/services"

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  const handleChange = ({ target }) => {
    setUser((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    //spinner
    //validaciones del user
    try {
      const userLogged = await LoginUser(user)
      console.log(userLogged)
      if (userLogged.success){
           //pendiente darle un tiempo 
        navigate("/")
      }
    } catch (error) {
      //pendiente de meter este error en state para pintarlo en pantalla
      console.log(error)
    }
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
          <Button text={"Login"} handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  )
}

export default Login
