import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    decodificado: null,
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload.token
      state.decodificado = action.payload.decodificado
    },
    clearAuthToken: (state) => {
      state.token = null
      state.decodificado = null
    },
  },
})

export const { setAuthToken, clearAuthToken } = authSlice.actions

export default authSlice.reducer
