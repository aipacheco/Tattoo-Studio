import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { Footer } from "./component/footer"
import Home from "./pages/Home/Home"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile"
import Appointment from "./pages/Appointment/Appointment"
import Admin from "./pages/Admin/Admin"
import { NavbarCustom } from "./components/Navbar/NavbarCustom"

export const Layout = () => {
  /*una ruta se compone de una dirección y unos params, 
  -un param se declara poniendo : y detrás el nombre del param - */

  return (
    <div>
      <BrowserRouter>
      <NavbarCustom/>
        <Routes>       
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/appointment" element={<Appointment/>} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

