import Datetime from "../../components/Datetime/Datetime"
import Button from "../../components/Button/Button"
import "./Appointment.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"


const Appointment = () => {
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    if (token) {
      console.log("hola raffaella")
    } else {
      navigate("/login")
    }
  }, [token, navigate])

  return (
    <>
      <div className="container d-flex justify-content-center mt-2" >
        <div className="col-12 col-md-6 col-lg-6">
          <h1 className="d-flex justify-content-center">Selecciona fecha y hora</h1>
          <Datetime />
        </div>
      </div>
      <Button text={"Pedir cita"}  />
    </>
  )
}

export default Appointment
