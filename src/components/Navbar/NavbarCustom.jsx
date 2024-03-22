import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import "./NavbarCustom.css"

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
        {isLoggedIn ? <div>estás logado</div> : <div>no estás logado</div>}
      </div>
    </nav>
  )
}
