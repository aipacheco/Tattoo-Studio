import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"


const rootReducer = combineReducers({
  auth: authReducer,
  // añadir más reducers si los hay
})

// configuración de redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        "persist/PERSIST",
        "persist/REHYDRATE",
        "persist/PAUSE",
        "persist/PURGE",
        "persist/REGISTER",
      ],
    },
  }),
})

export const persistor = persistStore(store)
