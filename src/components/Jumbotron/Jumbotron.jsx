import "./Jumbotron.css"
import tattooImage from '../../assets/tattoo.jpg';

const Jumbotron = () => {
  return (
    <div className="card jumbotron m-3">
      <img src={tattooImage} className="card-img" alt="Tattoo" />
      <div className="card-img-overlay">
        <h1 className="card-title mt-2">Magik Ink</h1>
        <p className="card-text">
          
        </p>
       
      </div>
    </div>
  )
}

export default Jumbotron
