import { useNavigate } from "react-router-dom"
import "./DropdownMenu.css"
import { useSelector, useDispatch } from "react-redux"
import { clearAuthToken } from "../../redux/authSlice"

const DropdownMenu = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const role = useSelector((state) => state.auth.role)
  const user = role === "user"
  const superAdmin = role === "super_admin"

  const handleProfileClick = () => {
    if (user) {
      navigate("/profile", { replace: true })
    }
    if (superAdmin) {
      navigate("/admin", { replace: true })
    }
    console.log(user)
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
              <i className="fa-solid fa-user me-1"></i> {user ? ("Mi perfil") : ("Administración")}
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
