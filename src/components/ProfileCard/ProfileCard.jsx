import "./ProfileCard.css"
const ProfileCard = () => {
  return (
    <>
      <div className="container d-flex justify-content-center">
      <div className="card profile-card" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..."></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title">Card title</h6>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default ProfileCard
