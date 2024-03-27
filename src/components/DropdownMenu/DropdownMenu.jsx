import { useNavigate } from "react-router-dom"
import "./DropdownMenu.css"
import { useSelector, useDispatch } from "react-redux"
import { clearAuthToken } from "../../redux/authSlice"

const DropdownMenu = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const roleName = useSelector((state) => state.auth.roleName)

  const handleProfileClick = () => {
    if (roleName === "user") {
      navigate("/profile")
    }
    // pendiente añadir admin
  }

  const handleLogout = () => {
    dispatch(clearAuthToken())
    navigate("/")
  }

  return (
    <>
      <div id="dropdown-menu" className="dropdown me-4">
        <a
          id="boton-drop"
          className="btn btn-outline-light dropdown-toggle "
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa-solid fa-bars"></i>
        </a>
        <ul className="dropdown-menu dropdown-menu-end ">
          <li onClick={handleProfileClick}>
            <p className="dropdown-item">
              <i className="fa-solid fa-user me-1"></i> Mi perfil
            </p>
          </li>
          <li onClick={handleLogout}>
            <p className="dropdown-item">
              {" "}
              Cerrar Sesión{" "}
              <i className="fa-solid fa-right-from-bracket mx-2"></i>
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default DropdownMenu
