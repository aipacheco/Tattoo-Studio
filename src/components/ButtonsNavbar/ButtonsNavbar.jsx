import LinkButton from "../LinkButton/LinkButton"
const ButtonsNavbar = () => {
  return (
    <>
      <ul className="navbar-nav d-flex gap-3 me-2 mb-2 mb-lg-0">
        <LinkButton direction={"/register"} text={"Registrarse"} />

        <LinkButton direction={"/login"} text={"Iniciar sesión"} />
      </ul>
    </>
  )
}

export default ButtonsNavbar