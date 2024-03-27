import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    //resto de reducers, si los hay
  },
})
