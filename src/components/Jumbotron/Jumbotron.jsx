import "./Jumbotron.css"
import tattooImage from '../../assets/tattoo.jpg';

const Jumbotron = () => {
  return (
    <div className="card jumbotron">
      <img src={tattooImage} className="card-img" alt="Tattoo" />
      <div className="card-img-overlay">
        <h1 className="card-title">Magik Ink</h1>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
       
      </div>
    </div>
  )
}

export default Jumbotron
