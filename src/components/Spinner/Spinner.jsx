import "./Spinner.css"

const Spinner = () => {
  return (
    <div className="container-fluid d-flex justify-content-center mt-5">
      {" "}
      <img
        src="src/assets/star.svg"
        alt="Cargando..."
        className="loading-image"
      />
    </div>
  )
}

export default Spinner
