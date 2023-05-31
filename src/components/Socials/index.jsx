import "./index.css"
import { FaGithub, FaLinkedin, FaItchIo } from "react-icons/fa"

function Socials() {
  return (
    <nav className="socials">
      <ul>
        <li className="socials-icon">
          <a href="https://github.com/DamienBELGHIT/">
            <FaGithub />
          </a>
        </li>
        <li className="socials-icon">
          <a href="https://www.linkedin.com/in/damien-belghit-074b44225/">
            <FaLinkedin />
          </a>
        </li>
        <li className="socials-icon">
          <a href="https://poishiche.itch.io/">
            <FaItchIo />
          </a>
        </li>
      </ul>
      <div className="bg-sphere"></div>
    </nav>
  )
}

export default Socials
