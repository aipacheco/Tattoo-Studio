import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
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
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/">
          <div className="brand">Magik Ink</div>
        </Link>
        {isLoggedIn ? <DropdownMenu /> : <ButtonsNavbar />}
      </div>
    </nav>
  )
}
