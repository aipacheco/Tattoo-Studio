import { useEffect } from "react"
import { NavbarCustom } from "../../components/Navbar/NavbarCustom"
import "./Profile.css"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      console.log("hola raffaella")
    } else {
      navigate("/")
    }
  }, [])
  
  return (
    <>
      <NavbarCustom />
    </>
  )
}

export default Profile
