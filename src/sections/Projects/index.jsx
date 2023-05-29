import "./index.css"
import { useState } from "react"
import MediaGrid from "../../components/MediaGrid"
import mediaList from "../../assets/data/medias.js"

function Projects() {
  const [projectType, setProjectType] = useState("Sites")

  return (
    <div id="projects-section">
      <div>
        <h2 className="section-title">Mes Projets</h2>
      </div>
      <ul className="project-type-select">
        <li
          onClick={() => setProjectType("Sites")}
          className={projectType === "Sites" ? "selected" : ""}
        >
          Sites webs
        </li>
        <li
          onClick={() => setProjectType("Jeux")}
          className={projectType === "Jeux" ? "selected" : ""}
        >
          Jeux vidéo
        </li>
        <li
          onClick={() => setProjectType("Illustrations")}
          className={projectType === "Illustrations" ? "selected" : ""}
        >
          Illustrations
        </li>
      </ul>
      <MediaGrid page={projectType} medias={mediaList} />
    </div>
  )
}

export default Projects
