import { useState } from "react"
import MediaModal from "../MediaModal"
import "./index.css"

function MediaGrid({ medias }) {
  const [isModalVisible, setModalVisible] = useState(false)
  const [modalMediaList, setModalMediaList] = useState([])
  return (
    <ul className="media-grid">
      {medias &&
        medias.map((media, index) => (
          <li className="media" key={index}>
            {media.link ? (
              <a href={media.link}>
                <img src={media.img} alt={media.title} />
              </a>
            ) : (
              <img
                src={media.img}
                alt={media.title}
                onClick={() => {
                  setModalVisible(true), setModalMediaList(media.list)
                }}
              />
            )}
            <h3>{media.title}</h3>
            <p>{media.description}</p>
          </li>
        ))}
      <MediaModal
        visibility={isModalVisible}
        setVisibility={setModalVisible}
        medias={modalMediaList}
      />
    </ul>
  )
}

export default MediaGrid
