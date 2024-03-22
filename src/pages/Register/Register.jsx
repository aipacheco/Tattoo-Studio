import InputCustom from "../../components/Input/InputCustom"
import { NavbarCustom } from "../../components/Navbar/NavbarCustom"
import "./Register.css"

const Register = () => {
  return (
    <>
      <NavbarCustom />
     <div className="form">
     <div className="col-12 col-md-6 col-lg-6">
        <InputCustom />
      </div>
     </div>
    </>
  )
}

export default Register
