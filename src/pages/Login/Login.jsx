import InputCustom from "../../components/Input/InputCustom"
import { NavbarCustom } from "../../components/Navbar/NavbarCustom"
import "./Login.css"

const Login = () => {
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

export default Login
