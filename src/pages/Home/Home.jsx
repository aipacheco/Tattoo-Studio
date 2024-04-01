import "./Home.css"
import Jumbotron from "../../components/Jumbotron/Jumbotron"
import Card from "../../components/Card/Card"
import { useEffect, useState } from "react"
import { GetServices } from "../../services/services"
import Spinner from "../../components/Spinner/Spinner"
import LinkButton from "../../components/LinkButton/LinkButton"
import { useSelector } from "react-redux"

const Home = () => {
  const token = useSelector((state) => state.auth.token)
  const [loading, setLoading] = useState(false)
  const [services, setServices] = useState([])

  const fetchServices = async () => {
    setLoading(true)
    const allServices = await GetServices()
    setServices(allServices.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchServices()
  }, [])

  return (
    <>
      <div className="home">
        <Jumbotron />
        {loading ? (
          <Spinner />
        ) : (
          <div className="center-flex">
            <div className="row center-flex m-1">
              <h1 className="center-flex">Nuestros servicios</h1>
              {services.map((service, index) => (
                <Card
                  key={index}
                  image={service.image}
                  serviceName={service.serviceName}
                  description={service.description}
                />
              ))}
              <div className="center-flex m-5">
                {token ? (
                  <LinkButton
                    direction={"/appointment"}
                    text={"Pide tu cita ahora"}
                  />
                ) : (
                  <LinkButton
                    direction={"/register"}
                    text={"Regístrate para poder pedir cita"}
                  />
                )}
              </div>
            </div>
          </div>
        )}

        <div className="row center-flex m-3">
          <div className=" mt-3 mb-3">
            <h1 className="center-flex">Dónde estamos</h1>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1294.9026080436265!2d-0.3751360737205127!3d39.473512671393976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4d7bb82999%3A0x47a5da1f8817c23f!2sADEIT%20-%20Fundaci%C3%B3n%20Universidad-Empresa!5e0!3m2!1ses!2ses!4v1711805506563!5m2!1ses!2ses"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Home
