import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { Layout } from "./layout.jsx"
import { Provider } from "react-redux"
import { store } from "./redux/store"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>
)
