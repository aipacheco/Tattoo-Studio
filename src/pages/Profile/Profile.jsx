import { useEffect } from "react"
import "./Profile.css"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Profile = () => {
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    if (token) {
      console.log("hola raffaella")
    } else {
      navigate("/login")
    }
  }, [token, navigate])

  return <>Hola payo</>
}

export default Profile
