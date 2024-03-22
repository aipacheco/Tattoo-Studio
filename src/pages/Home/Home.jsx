import "./Home.css"
import { NavbarCustom } from "../../components/Navbar/NavbarCustom"
import Jumbotron from "../../components/Jumbotron/Jumbotron"

const Home = () => {
  return (
    <div className="home">
      <NavbarCustom />
      <Jumbotron/>
    </div>
  )
}

export default Home
