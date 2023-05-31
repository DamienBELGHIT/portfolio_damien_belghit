import IconList from "../../components/IconList"
import "./index.css"
import technos from "../../assets/data/technos"

function CV() {
  return (
    <div id="cv-section">
      <div>
        <h2 className="section-title">Mon CV</h2>
      </div>
      <section className="cv-content">
        <h3 className="cv-title">Technos</h3>
        {technos.map((technoType, index) => (
          <div className="technoList" key={index}>
            <h3 className="techno-type-title">{technoType.name}</h3>
            <IconList
              icons={
                technos[technos.findIndex((e) => e.type === technoType.type)]
                  .technos
              }
            />
          </div>
        ))}
        <h3 className="cv-title">Formations</h3>
        <div className="formation-list">
          <section className="formation">
            <h4>Certificat Développeur d'application - JavaScript React</h4>
            <p>
              De décembre 2022 à avril 2023
              <br />
              OpenClassrooms Distanciel
            </p>
          </section>
          <section className="formation">
            <h4>DUT Informatique</h4>
            <p>
              De 2018 à 2021
              <br />
              IUT Vannes
            </p>
          </section>
          <section className="formation">
            <h4>Baccalauréat SSVT</h4>
            <p>2018</p>
          </section>
          <a
            className="button-brown"
            href="/src/assets/files/CV_BELGHIT_Damien.pdf"
          >
            Voir CV Complet
          </a>
        </div>
      </section>
    </div>
  )
}

export default CV
