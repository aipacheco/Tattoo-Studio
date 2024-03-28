import LinkButton from "../LinkButton/LinkButton"
const ButtonsNavbar = () => {
  return (
    <>
      <ul className="navbar-nav d-flex">
        <LinkButton direction={"/register"} text={"Registrarse"} />

        <LinkButton direction={"/login"} text={"Iniciar sesión"} />
      </ul>
    </>
  )
}

export default ButtonsNavbar
