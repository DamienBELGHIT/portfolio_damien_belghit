import Main from "../../sections/Main"
import Projects from "../../sections/Projects"
import CV from "../../sections/CV"
import Contact from "../../sections/Contact"
import LineSeparator from "../../components/LineSeparator"
import "./index.css"
import { FaHome, FaBars } from "react-icons/fa"
import { useRef, useState } from "react"

function Navigation() {
  const projectsSection = useRef(null)
  const cvSection = useRef(null)
  const contactSection = useRef(null)
  const [navVisible, setNavVisible] = useState(true)

  const scrollToRef = (ref) => {
    setNavVisible(false)
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <div>
      <header className="headers">
        <div className="bg-sphere"></div>
        <div
          className={"bg-sphere-home" + (navVisible ? " extended" : "")}
        ></div>
        <div className="burger-menu" onClick={() => setNavVisible(!navVisible)}>
          {navVisible ? "X" : <FaBars />}
        </div>
        <div className={"nav-btns" + (navVisible ? "" : " mobile-hidden")}>
          <div
            className="nav-btn"
            onClick={() => {
              setNavVisible(false)
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }}
          >
            <FaHome />
          </div>

          <div className="sections">
            <div
              className="nav-btn"
              onClick={() => scrollToRef(projectsSection)}
            >
              Mes Projets
            </div>
            <div className="nav-btn" onClick={() => scrollToRef(cvSection)}>
              Mon CV
            </div>
            <div
              className="nav-btn"
              onClick={() => scrollToRef(contactSection)}
            >
              Contactez-moi
            </div>
          </div>
        </div>
      </header>
      <main>
        <Main />
        <div ref={projectsSection}>
          <Projects />
        </div>
        <LineSeparator />
        <div ref={cvSection}>
          <CV />
        </div>
        <LineSeparator />
      </main>
      <footer ref={contactSection}>
        <Contact />
      </footer>
    </div>
  )
}

export default Navigation
