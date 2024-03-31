import { useNavigate } from "react-router-dom"
import Button from "../../components/Button/Button"
import InputCustom from "../../components/Input/InputCustom"
import { RegisterUser } from "../../services/services"
import "./Register.css"
import { useEffect, useState } from "react"
import Spinner from "../../components/Spinner/Spinner"
import Alert from "../../components/Alert/Alert"
import { CheckForm, checkAllEmpty, validator } from "../../utils/utils"

const Register = () => {
  const [isFormComplete, setIsFormComplete] = useState(false)
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  })
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [stateMessage, setStateMessage] = useState({
    message: "",
    className: "",
  })
  const [alert, setAlert] = useState(false)
  const [userError, setUserError] = useState({
    first_nameError: "",
    last_nameError: "",
    emailError: "",
    passwordError: "",
  })

  useEffect(() => {
    const isErrorClean = checkAllEmpty(userError)
    const isUserComplete = CheckForm(user)
    if (isErrorClean && isUserComplete) {
      setIsFormComplete(true)
    } else {
      setIsFormComplete(false)
    }
  }, [user, userError])

  const handleChange = ({ target }) => {
    setUser((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
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
      const userRegister = await RegisterUser(user)
      if (userRegister.success) {
        setAlert(true)
        setStateMessage({
          message: userRegister.message,
          className: "success",
        })
        setTimeout(() => {
          setAlert(false)
          navigate("/login")
        }, 750)
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
              <div className="error">{userError.first_nameError}</div>
              <InputCustom
                label={"Apellidos"}
                type={"text"}
                name={"last_name"}
                handleChange={handleChange}
                required
              />
              <div className="error">{userError.last_nameError}</div>
              <InputCustom
                label={"Email"}
                type={"email"}
                name={"email"}
                handleChange={handleChange}
              />
              <div className="error">{userError.emailError}</div>
              <InputCustom
                label={"Contraseña"}
                type={"password"}
                name={"password"}
                handleChange={handleChange}
              />
              <div className="error">{userError.passwordError}</div>
              {alert && (
                <div className="d-flex justify-content-center mt-3">
                  <Alert
                    className={stateMessage.className}
                    message={stateMessage.message}
                  />
                </div>
              )}
              <Button
                text={"Registrarse"}
                handleSubmit={handleSubmit}
                isFormComplete={isFormComplete}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Register
