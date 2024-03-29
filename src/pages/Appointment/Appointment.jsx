import Datetime from "../../components/Datetime/Datetime"
import Button from "../../components/Button/Button"
import "./Appointment.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { GetServices, PostAppointment } from "../../services/services"

const Appointment = () => {
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)
  const [dateTime, setDateTime] = useState(null)
  const [isFormComplete, setIsFormComplete] = useState(false)
  const [loading, setLoading] = useState(false)
  const [appointment, setAppointment] = useState({
    appointment_date: "",
    service_id: 1,
  })
  const [services, setServices] = useState([])

  const fetchData = async () => {
    const allServices = await GetServices()
    setServices(allServices.data)
    console.log(services)
  }

  useEffect(() => {
    if (token) {
      fetchData()
    } else {
      navigate("/login")
    }
  }, [token, navigate])

  const handleDateTimeChange = (dateTime) => {
    setDateTime(dateTime)
    setAppointment((prevAppointment) => ({
      ...prevAppointment,
      appointment_date: dateTime,
    }))
    setIsFormComplete(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      //falta la parte de pintar en pantalla los mensajes y errores
      console.log(appointment)
      const postAppointment = await PostAppointment(appointment, token)
      console.log(postAppointment)
    } catch (error) {
      console.log(error)
    }
  }

  const handleServiceChange = ({ target }) => {
    setAppointment((prevAppointment) => ({
      ...prevAppointment,
      service_id: target.value,
    }))
  }

  return (
    <>
      <div className="container d-flex justify-content-center mt-2">
        <div className="col-12 col-md-6 col-lg-6">
          <h1 className="d-flex justify-content-center">
            Selecciona fecha y hora
          </h1>
          <Datetime onDateTimeChange={handleDateTimeChange} />
          <div className="d-flex justify-content-center m-3">
            <select
              className="form-select"
              onChange={handleServiceChange}
              value={appointment.service_id}
            >
              {/* <option value="" disabled selected>
                Selecciona el servicio
              </option> */}
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.serviceName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <Button
        text={"Pedir cita"}
        isFormComplete={isFormComplete}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default Appointment
