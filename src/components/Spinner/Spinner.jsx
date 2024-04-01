import "./Spinner.css"
import starImage from './../../assets/star.png'

const Spinner = () => {
  return (
    <div className="container-fluid d-flex justify-content-center mt-5">
      {" "}
      <img
        src={starImage}
        alt="Cargando..."
        className="loading-image"
      />
    </div>
  )
}

export default Spinner
