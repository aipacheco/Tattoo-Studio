const URL = "https://proyecto4-tatuajes.onrender.com/api"
const HEADERS = {
  "Content-Type": "application/json",
}

export const RegisterUser = async (user) => {
  try {
    const response = await fetch(`${URL}/auth/register`, {
      method: "POST",
      headers: HEADERS,
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

export const Login = async (user) => {
  try {
    const response = await fetch(`${URL}/user/login`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(user),
    })
    const data = await response.json()
    if (!data.success) {
      throw new Error(data.message)
    }
    localStorage.setItem("token", data.token)
    return data
  } catch (error) {
    console.log("Error al iniciar sesión", error)
    throw error
  }
}
