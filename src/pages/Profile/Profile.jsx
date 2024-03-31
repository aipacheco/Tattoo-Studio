/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import "./Profile.css"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Spinner from "../../components/Spinner/Spinner"
import { GetMyAppointments, GetProfile } from "../../services/services"
import ProfileCard from "../../components/ProfileCard/ProfileCard"

const Profile = () => {
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState([])
  const [appointments, setAppointments] = useState([])

  const fetchProfile = async () => {
    setLoading(true)
    const myProfile = await GetProfile(token)
    setProfile(myProfile.data)
    const myAppointments = await GetMyAppointments(token)
    setAppointments(myAppointments.message)
    setLoading(false)
  }
  useEffect(() => {
    if (token) {
      fetchProfile()
    } else {
      navigate("/login")
    }
  }, [token])


  const { avatar, email, first_name, last_name } = profile

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className=" mt-3 mb-3">
            <ProfileCard
              avatar={avatar}
              first_name={first_name}
              last_name={last_name}
              email={email}
            />
          </div>
          <div className=" mt-3 mb-3">
            <h1 className="center-flex">Tus citas</h1>
            <ul>
              {appointments.map((app, index) => (
                <li key={index}>
                  {app.service.serviceName} {app.appointment_date}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  )
}

export default Profile
