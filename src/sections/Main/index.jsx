import faceImage from "../../assets/img/Autoportrait.png"
import "./index.css"

function Main() {
  return (
    <div id="main-section">
      <div>
        <h1>
          Damien
          <br />
          <span className="highlight">BELGHIT</span>
        </h1>
      </div>
      <div className="bio">
        <section>
          <h2>Développeur Front-End & Designer</h2>
          <p>
            J’aime réaliser des interfaces solides et poussées avec une panoplie
            diverse d’outils créatifs à ma disposition.
          </p>
        </section>
        <div className="profile-img">
          <img src={faceImage} alt="Face image" />
          <div className="bg-sphere big"></div>
          <div className="bg-sphere small"></div>
        </div>
      </div>
    </div>
  )
}

export default Main
