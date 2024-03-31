/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import "./Profile.css"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Spinner from "../../components/Spinner/Spinner"
import { GetMyAppointments, GetProfile } from "../../services/services"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import DataTable from "react-data-table-component"
import LinkButton from "../../components/LinkButton/LinkButton"
import { format, addHours } from "date-fns"
import { Modal } from "reactstrap"

const Profile = () => {
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState([])
  const [appointments, setAppointments] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState(null)

  const fetchProfile = async () => {
    setLoading(true)
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
    if (token) {
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
      button: true,
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
  const handleSelect = (state) => {
    // para acceder a las filas seleccionadas
    console.log(state.selectedRows)
  }
  const handleDeleteClick = (appointment) => {
    //lo setea a selectedAppointment
    setSelectedAppointment(appointment)
    console.log(appointment)
    setIsModalOpen(true)
  }

  const handleConfirmDelete = () => {
    console.log("Confirmar")
    console.log(selectedAppointment)
  }
  const { avatar, email, first_name, last_name } = profile

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Modal className="center-modal" isOpen={isModalOpen}>
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

          <div className=" mt-3 mb-3">
            <ProfileCard
              avatar={avatar}
              first_name={first_name}
              last_name={last_name}
              email={email}
            />
          </div>

          <div className="mt-3 mb-3">
            <h1 className="center-flex">Tus citas</h1>
            <div className="center-flex p-3">
              <DataTable
                columns={columns}
                data={appointments}
                selectableRows
                fixedHeader
                onSelectedRowsChange={handleSelect}
              />
            </div>

            <div className="center-flex mt-3 mb-3">
              <LinkButton
                direction={"/appointment"}
                text={"Pide una nueva cita"}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Profile
