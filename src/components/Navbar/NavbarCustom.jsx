import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import "./NavbarCustom.css"
import DropdownMenu from "../DropdownMenu/DropdownMenu"
import ButtonsNavbar from "../ButtonsNavbar/ButtonsNavbar"

export const NavbarCustom = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink to="/">
        <div className="brand">Magik Ink</div>
        </NavLink>
        {isLoggedIn ? <DropdownMenu /> : <ButtonsNavbar />}
      </div>
    </nav>
  )
}
