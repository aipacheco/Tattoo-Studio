const URL = "https://proyecto4-tatuajes.onrender.com/api"

export const Register = async (user) => {
  try {
    const response = await fetch(`${URL}/register`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(user),
    })
    return await response.json()
  } catch (error) {
    console.log("Error al registrar el usuario", error)
    throw error
  }
}
