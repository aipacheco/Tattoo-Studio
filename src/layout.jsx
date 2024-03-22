import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { Navbar } from "./component/navbar"
// import { Footer } from "./component/footer"
import Home from "./pages/Home/Home"

export const Layout = () => {
  /*una ruta se compone de una dirección y unos params, 
  -un param se declara poniendo : y detrás el nombre del param - */

  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

