import "./index.css"
import { FaEnvelope, FaPhone } from "react-icons/fa"

function Contact() {
  return (
    <div id="contact-section">
      <div>
        <h2 className="section-title">Contactez-moi</h2>
      </div>
      <div className="contact-infos">
        <a href="mailto:email@example.com">
          <FaEnvelope />
          belghit.damien@gmail.com
        </a>
        <div>
          <FaPhone />
          07 67 31 93 34
        </div>
      </div>
    </div>
  )
}

export default Contact
