import { useNavigate } from "react-router-dom"
import "./DropdownMenu.css"

const DropdownMenu = () => {
  const navigate = useNavigate()

  const ProfilePage = () => {
    let roles = localStorage.getItem("role")
    if (roles == "User") {
      navigate("/profile")
    } 
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    //pendiente de cambiar por redux  
    navigate("/")
 
  }

  return (
    <>
      <div id="dropdown-menu" className="dropdown me-4">
        <a
          id="boton-drop"
          className="btn btn-outline-dark dropdown-toggle "
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa-solid fa-bars"></i>
        </a>
        <ul className="dropdown-menu dropdown-menu-end ">
          <li onClick={ProfilePage}>
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
