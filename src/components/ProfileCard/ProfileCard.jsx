/* eslint-disable react/prop-types */
import "./ProfileCard.css"
const ProfileCard = ({ avatar, email, first_name, last_name, handleEdit }) => {
  return (
    <>
      <div className="profile-card center-flex">
        <div className="card card-prof">
          <div className="row g-0">
            <div className="col-md-6 img-container">
              <img
                src={avatar}
                className="img-fluid centered-img"
                alt="avatar"
              ></img>
            </div>
            <div className="col-md-6 ">
              <div className="card-body card-body-prof center-flex">
                <div className="container">
                  <h5 className="card-title">Tus datos</h5>
                  <span className="material-symbols-outlined" onClick={handleEdit}>edit_note</span>
                  <p className="card-text">Nombre: {first_name}</p>
                  <p className="card-text">Apellidos: {last_name}</p>
                  <p className="card-text">email: {email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
