import React from "react"
import ReactDOM from "react-dom/client"
import Headers from "./components/Headers"
import Main from "./sections/Main"
import Projects from "./sections/Projects"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Headers />
    <main>
      <Main />
      <Projects />
    </main>
  </React.StrictMode>
)
