import { useEffect, useState } from "react"
import "./index.css"

function MediaGrid({ page, medias }) {
  const [mediaList, setMediaList] = useState([])

  useEffect(() => {
    medias &&
      setMediaList(medias[medias.findIndex((e) => e.type === page)].medias)
  }, [medias, page])

  return (
    <ul className="media-grid">
      {mediaList &&
        mediaList.map((media, index) => (
          <li className="media" key={index}>
            <a href={media.link}>
              <img src={media.img} alt={media.title} />
            </a>
            <h3>{media.title}</h3>
            <p>{media.description}</p>
          </li>
        ))}
    </ul>
  )
}

export default MediaGrid
