/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import "./Profile.css"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Spinner from "../../components/Spinner/Spinner"
import {
  GetMyAppointments,
  GetProfile,
  UpdateProfile,
} from "../../services/services"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import DataTable from "react-data-table-component"
import LinkButton from "../../components/LinkButton/LinkButton"
import { format, addHours } from "date-fns"
import { Modal } from "reactstrap"
import { customStyles } from "../../utils/utils"
import Alert from "../../components/Alert/Alert"

const Profile = () => {
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)
  const role = useSelector((state) => state.auth.role)
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState([])
  const [appointments, setAppointments] = useState([])
  //para el modal de eliminar
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  //para el modal de editar
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [editProfile, setEditProfile] = useState({
    first_name: "",
    last_name: "",
  })
  const [stateMessage, setStateMessage] = useState({
    message: "",
    className: "",
  })
  const [alert, setAlert] = useState(false)

  const fetchProfile = async () => {
    setLoading(true)
    //pendiente manejo de errores
    const myProfile = await GetProfile(token)
    setProfile(myProfile.data)
    const myAppointments = await GetMyAppointments(token)
    setAppointments(myAppointments.message)
    setLoading(false)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    //para poder restarle dos horas
    const dateMinusTwoHours = addHours(date, -2)
    const formattedDateTime = format(dateMinusTwoHours, "dd-MM-yyyy HH:mm")
    return formattedDateTime
  }

  useEffect(() => {
    if (token && role === "user") {
      fetchProfile()
    } else {
      navigate("/login")
    }
  }, [token])

  const columns = [
    {
      name: "Servicio",
      selector: (row) => row.service.serviceName,
      sortable: true,
    },
    {
      name: "Cita",
      selector: (row) => formatDate(row.appointment_date),
      sortable: true,
    },
    {
      name: "Eliminar",
      cell: (row) => (
        <button
          className="btn btn-outline-light"
          onClick={() => handleDeleteClick(row)}
        >
          <i className="material-symbols-outlined">cancel</i>
        </button>
      ),
    },
  ]

  const handleDeleteClick = (appointment) => {
    //lo setea a selectedAppointment
    setSelectedAppointment(appointment)
    console.log(appointment)
    setIsModalOpen(true)
  }

  const handleConfirmDelete = () => {
    console.log(selectedAppointment)
  }

  //para el modal de editar
  const handleEdit = () => {
    setEditProfile(profile)
    setIsEditModalOpen(true)
  }

  //donde hay inputs hay bindeo, eso es así
  const handleChange = ({ target }) => {
    const { name, value } = target
    setEditProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }))
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    //para mandar solo estos dos campos
    const profileDataToUpdate = {
      first_name: editProfile.first_name,
      last_name: editProfile.last_name,
    }
    try {
      const profileEdit = await UpdateProfile(profileDataToUpdate, token)
      if (profileEdit.success) {
        setAlert(true)
        setStateMessage({
          message: profileEdit.message,
          className: "success",
        })
        setTimeout(() => {
          setAlert(false)
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
    setIsEditModalOpen(false)
  }

  const { avatar, email, first_name, last_name } = profile

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Modal
            className="center-modal"
            isOpen={isModalOpen}
            toggle={() => setIsModalOpen(false)}
          >
            <h2>Confirmar Eliminación</h2>
            <p>¿Estás seguro de que deseas eliminar esta cita?</p>
            <button
              className="btn btn-outline-light"
              onClick={handleConfirmDelete}
            >
              Confirmar
            </button>
            <button
              className="btn btn-outline-light"
              onClick={() => setIsModalOpen(false)}
            >
              Cancelar
            </button>
          </Modal>

          <Modal
            className="center-modal"
            isOpen={isEditModalOpen}
            toggle={() => setIsEditModalOpen(false)}
          >
            <h2>Editar Datos del Usuario</h2>
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="first_name"
                placeholder="Nombre"
                value={editProfile.first_name || ""}
                onChange={handleChange}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Apellidos"
                value={editProfile.last_name || ""}
                onChange={handleChange}
              />
              <button className="btn btn-outline-light mt-3" type="submit">
                Guardar Cambios
              </button>
              <button
                className="btn btn-outline-light mt-3"
                type="button"
                onClick={() => setIsEditModalOpen(false)}
              >
                Cancelar
              </button>
            </form>
          </Modal>

          <div className=" mt-3 mb-3">
            <ProfileCard
              avatar={avatar}
              first_name={first_name}
              last_name={last_name}
              email={email}
              handleEdit={handleEdit}
            />
            {alert && (
              <div className="d-flex justify-content-center mt-3">
                <Alert
                  className={stateMessage.className}
                  message={stateMessage.message}
                />
              </div>
            )}
          </div>

          <h1 className="center-flex">Tus citas</h1>
          <div className="center-flex">
            <div className="container">
              <DataTable
                columns={columns}
                data={appointments}
                customStyles={customStyles}
                selectableRows
                fixedHeader
              />
            </div>
          </div>
          <div className="center-flex mt-3 mb-3">
            <LinkButton
              direction={"/appointment"}
              text={"Pide una nueva cita"}
            />
          </div>
        </>
      )}
    </>
  )
}

export default Profile
