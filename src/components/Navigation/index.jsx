import Main from "../../sections/Main"
import Projects from "../../sections/Projects"
import CV from "../../sections/CV"
import Contact from "../../sections/Contact"
import LineSeparator from "../../components/LineSeparator"
import "./index.css"
import { FaHome } from "react-icons/fa"
import { useRef } from "react"

function Navigation() {
  const projectsSection = useRef(null)
  const cvSection = useRef(null)
  const contactSection = useRef(null)

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <div>
      <header className="headers">
        <div className="bg-sphere"></div>
        <div className="bg-sphere-home"></div>
        <div
          className="nav-btn"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }}
        >
          <FaHome />
        </div>

        <div className="sections">
          <div className="nav-btn" onClick={() => scrollToRef(projectsSection)}>
            Mes Projets
          </div>
          <div className="nav-btn" onClick={() => scrollToRef(cvSection)}>
            Mon CV
          </div>
          <div className="nav-btn" onClick={() => scrollToRef(contactSection)}>
            Contactez-moi
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
