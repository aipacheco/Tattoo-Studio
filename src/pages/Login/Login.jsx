import { useEffect, useState } from "react"
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
import { validator } from "../../utils/utils"
import Spinner from "../../components/Spinner/Spinner"

const Login = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()
  const [isFormComplete, setIsFormComplete] = useState(false)
  useEffect(() => {
    for (let elemento in user) {
      if (user[elemento] === "") {
        setIsFormComplete(false)
        return
      }
    }
    setIsFormComplete(true)
  }, [user])

  const [loading, setLoading] = useState(false)
  const [stateMessage, setStateMessage] = useState({
    message: "",
    className: "",
  })
  const [alert, setAlert] = useState(false)
  const [userError, setUserError] = useState({
    emailError: "",
    passwordError: "",
  })

  const handleChange = ({ target }) => {
    setUser((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }
  const handleBlur = ({ target }) => {
    const error = validator(target.value, target.name)
    setUserError((prevState) => ({
      ...prevState,
      [target.name + "Error"]: error,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
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
        setAlert(true)
        setStateMessage({
          message: userLogged.message,
          className: "success",
        })
        setInterval(() => {
          setAlert(false)
          navigate("/profile")
        }, 1500)
      }
    } catch (error) {
      setLoading(false)
      setAlert(true)
      setStateMessage({
        message: `${error}`,
        className: "danger",
      })
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <div className="form">
            <div className="col-12 col-md-6 col-lg-6">
              <Alert
                className={stateMessage.className}
                message={stateMessage.message}
              />
              <InputCustom
                label={"Email"}
                type={"email"}
                name={"email"}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              <InputCustom
                label={"Contraseña"}
                type={"password"}
                name={"password"}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              <Button
                text={"Login"}
                handleSubmit={handleSubmit}
                isFormComplete={isFormComplete}
              />
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
      )}
    </>
  )
}

export default Login
