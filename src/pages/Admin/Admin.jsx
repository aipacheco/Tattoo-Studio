/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Modal } from "reactstrap"
import { GetAllUsers, InactivateUser } from "../../services/services"
import DataTable from "react-data-table-component"
import { customStyles } from "../../utils/utils"
import Spinner from "../../components/Spinner/Spinner"
import Alert from "../../components/Alert/Alert"

const Admin = () => {
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)
  const role = useSelector((state) => state.auth.role)
  const [loading, setLoading] = useState(false)
  const [stateMessage, setStateMessage] = useState({
    message: "",
    className: "",
  })
  const [alert, setAlert] = useState(false)
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  //para el modal de eliminar
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    //pendiente manejo de errores
    const usersData = await GetAllUsers(token)
    setUsers(usersData.data)
    setLoading(false)
  }

  useEffect(() => {
    if (token && role === "super_admin") {
      fetchData()
      // console.log(users)
    } else {
      navigate("/login")
    }
  }, [token])

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.first_name,
      sortable: true,
    },
    {
      name: "Apellidos",
      selector: (row) => row.last_name,
      sortable: true,
    },
    {
      name: "email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "activo/inactivo",
      selector: (row) => (row.isActive ? "Activo" : "Inactivo"),
      sortable: true,
    },
    {
      name: "Inactivar",
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

  const handleDeleteClick = (user) => {
    //lo setea a selectedUser
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  const handleConfirmDelete = async (e) => {
    e.preventDefault()
    const id = selectedUser.id
    setLoading(true)
    try {
      const inactiveUser = await InactivateUser(id, token)
      if (inactiveUser.success) {
        //hay que volver a hacer fetch para traer los datos de nuevo
        await fetchData()
        setAlert(true)
        setStateMessage({
          message: inactiveUser.message,
          className: "success",
        })
        setTimeout(() => {
          setAlert(false)
        }, 750)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setAlert(true)
      setStateMessage({
        message: `${error}`,
        className: "danger",
      })
    }
    setIsModalOpen(false)
  }

  return (
    <>
      <h1 className="center-flex mt-5">Panel de administración de usuarios</h1>
      {loading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <Modal
            className="center-modal"
            isOpen={isModalOpen}
            toggle={() => setIsModalOpen(false)}
          >
            <h2>Confirmar Eliminación</h2>
            <p>¿Estás seguro de que deseas eliminar el usuario?</p>
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

          <div className="center-flex">
            <div className="container">
            {alert && (
              <div className="d-flex justify-content-center mt-3">
                <Alert
                  className={stateMessage.className}
                  message={stateMessage.message}
                />
              </div>
            )}
              <DataTable
                columns={columns}
                data={users}
                customStyles={customStyles}
                selectableRows
                fixedHeader
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Admin
