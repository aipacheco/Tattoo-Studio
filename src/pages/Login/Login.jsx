import { useState } from "react"
import InputCustom from "../../components/Input/InputCustom"
import "./Login.css"
import Button from "../../components/Button/Button"
import { useNavigate } from "react-router-dom"
import { LoginUser } from "../../services/services"
import Alert from "../../components/Alert/Alert"
import LinkButton from "../../components/LinkButton/LinkButton"
import { decodeToken } from "react-jwt"
import { useDispatch } from "react-redux"
import { setAuthToken } from "../../redux/authSlice"

const Login = () => {
  const dispatch = useDispatch()
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
      if (userLogged.success) {
        const decodificado = await decodeToken(userLogged.token)
        // dispatch setea setAuthToken(la funcion del slicer) con el token y los datos decodificados
        dispatch(
          setAuthToken({
            token: userLogged.token,
            decodificado: decodificado,
          })
        )
        setTimeout(() => {
          navigate("/profile")
        }, 750)
      }
    } catch (error) {
      //pendiente de meter este error en state para pintarlo en pantalla
      console.log(error)
    }
  }

  return (
    <>
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
          <div className="login-question">
            <Alert
              className={"secondary"}
              message="¿No estás registrado? Crea tu cuenta para poder acceder a
                  nuestros servicios"
            />
          </div>
          <div className="login-button">
            <LinkButton
              direction={"/register"}
              text={"Ir a la página de registro"}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
