import { useEffect, useState } from "react"
import "./Profile.css"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Spinner from "../../components/Spinner/Spinner"
import { GetProfile } from "../../services/services"
import ProfileCard from "../../components/ProfileCard/ProfileCard"

const Profile = () => {
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState([])

  const fetchProfile = async () => {
    const myProfile = await GetProfile(token)
    setProfile(myProfile.data)
    console.log(profile)
  }
  useEffect(() => {
    if (token) {
      fetchProfile()
    } else {
      navigate("/login")
    }
  }, [token, navigate])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ProfileCard />
        </>
      )}
    </>
  )
}

export default Profile
