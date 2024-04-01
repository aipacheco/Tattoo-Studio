import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./NavbarCustom.css"
import DropdownMenu from "../DropdownMenu/DropdownMenu"
import ButtonsNavbar from "../ButtonsNavbar/ButtonsNavbar"
import { useSelector } from "react-redux"

export const NavbarCustom = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [token])

  return (
    <nav className="navbar navbar-expand-lg p-3">
  <div className="container-fluid">
    <Link to="/">
      <div className="brand">Magik Ink</div>
    </Link>
    <button className="navbar-toggler btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon tex-light"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      {isLoggedIn ? <DropdownMenu /> : <ButtonsNavbar />}
    </div>
  </div>
</nav>
  )
}
