import {store} from "../redux/store"
import { setAuthToken} from "../redux/authSlice"
const URL = "https://proyecto4-tatuajes.onrender.com/api"


export const RegisterUser = async (user) => {
  try {
    const response = await fetch(`${URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
    const data = await response.json()
    if (!data.success) {
      throw new Error(data.message)
    }
    return data
  } catch (error) {
    console.log("Error al registrar el usuario", error)
    throw error
  }
}

export const LoginUser = async (user) => {
  try {
    const response = await fetch(`${URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
    const data = await response.json()
    if (!data.success) {
      throw new Error(data.message)
    }
    //para usar el store directamente sin tener que usar useDispatch()
    store.dispatch(setAuthToken(data.token))
    return data
  } catch (error) {
    console.log("Error al iniciar sesión", error)
    throw error
  }
}
