/* eslint-disable react/prop-types */
import "./Card.css"

const Card = ({ image, description, serviceName }) => {
  return (
    <>
        <div className="card card-service p-0 m-1">
          <img src={image} className="card-img-top" alt="image_service"></img>
          <div className="card-body">
            <h5 className="card-title">{serviceName}</h5>
            <p className="card-text">{description}</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
    </>
  )
}

export default Card
