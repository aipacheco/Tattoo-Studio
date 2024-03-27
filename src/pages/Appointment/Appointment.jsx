import Datetime from "../../components/Datetime/Datetime"
import Button from "../../components/Button/Button"
import "./Appointment.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Appointment = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      console.log("hola raffaella")
    } else {
      //poner mensaje y llevar a login
      navigate("/login")
    }
  }, [])
  return (
    <>
      <div className="container d-flex justify-content-center mt-2" >
        <div className="col-12 col-md-6 col-lg-6">
          <h1>Selecciona fecha y hora</h1>
          <Datetime />
        </div>
      </div>
      <Button text={"Pedir cita"}  />
    </>
  )
}

export default Appointment
