import React from "react"
import ReactDOM from "react-dom/client"
import Navigation from "./components/Navigation"
import Socials from "./components/Socials"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navigation />
    <Socials />
  </React.StrictMode>
)
