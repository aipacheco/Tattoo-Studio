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
    setLoading(true)
    const myProfile = await GetProfile(token)
    setProfile(myProfile.data)
    setLoading(false)
  }
  useEffect(() => {
    if (token) {
      fetchProfile()
      // console.log(profile)
    } else {
      navigate("/login")
    }
  }, [])

  const { avatar, email, first_name, last_name } = profile

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ProfileCard
            avatar={avatar}
            first_name={first_name}
            last_name={last_name}
            email={email}
          />
        </>
      )}
    </>
  )
}

export default Profile
