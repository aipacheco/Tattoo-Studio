import { Link } from "react-router-dom"

const ButtonsNavbar = () => {
  return (
    <>
      <ul className="navbar-nav d-flex">
        {" "}
        <li className="p-1">
          <Link to="/register">Registrarse</Link>
        </li>
        <li className="p-1">
          <Link to="/login">Iniciar sesión</Link>
        </li>
      </ul>
    </>
  )
}

export default ButtonsNavbar
