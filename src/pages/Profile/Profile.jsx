import { useEffect } from "react"
import "./Profile.css"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Spinner from "../../components/Spinner/Spinner"

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

  return <>
  <Spinner />
  </>
}

export default Profile
