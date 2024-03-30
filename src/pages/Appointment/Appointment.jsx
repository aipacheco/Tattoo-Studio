import Datetime from "../../components/Datetime/Datetime"
import Button from "../../components/Button/Button"
import "./Appointment.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { GetServices, PostAppointment } from "../../services/services"
import Spinner from "../../components/Spinner/Spinner"
import Alert from "../../components/Alert/Alert"

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
  const [stateMessage, setStateMessage] = useState({
    message: "",
    className: "",
  })
  const [alert, setAlert] = useState(false)

  const fetchData = async () => {
    const allServices = await GetServices()
    setServices(allServices.data)
    // console.log(services)
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
      // console.log(appointment)
      const postAppointment = await PostAppointment(appointment, token)
      if (postAppointment.success) {
        setAlert(true)
        setStateMessage({
          message:"Cita creada correctamente",
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

  const handleServiceChange = ({ target }) => {
    setAppointment((prevAppointment) => ({
      ...prevAppointment,
      service_id: target.value,
    }))
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container d-flex justify-content-center mt-2">
            <div className="col-12 col-md-6 col-lg-6">
              <h1 className="d-flex justify-content-center">
                Selecciona fecha y hora
              </h1>
              {alert && (
                <div className="d-flex justify-content-center mt-3">
                  <Alert
                    className={stateMessage.className}
                    message={stateMessage.message}
                  />
                </div>
              )}
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
      )}
    </>
  )
}

export default Appointment
