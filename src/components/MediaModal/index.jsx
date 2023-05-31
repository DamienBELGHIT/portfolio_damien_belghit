import { useState, useEffect } from "react"
import "./index.css"

function MediaModal({ visibility, setVisibility, medias }) {
  const [page, setPage] = useState(0)

  const previousPage = () =>
    setPage(page - 1 < 0 ? medias.length - 1 : page - 1)

  const nextPage = () => setPage((page + 1) % medias.length)

  useEffect(() => {
    setPage(0)
    visibility
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll")
  }, [visibility])

  useEffect(() => {
    document.removeEventListener("keydown", detectKeyDown)
    document.addEventListener("keydown", detectKeyDown, true)
  }, [page])

  const detectKeyDown = (e) => {
    if (e.key === "Escape") {
      setVisibility(false)
    }
  }

  return visibility ? (
    <div>
      <div id="grey-bg"></div>
      <button className="close-modal" onClick={() => setVisibility(false)}>
        X
      </button>
      <div className="media-modal">
        <div className="modal-content">
          <button className="arrow-btn" onClick={previousPage}>
            &#60;
          </button>
          <img src={medias[page]} alt="MediaModal" />
          <button className="arrow-btn" onClick={nextPage}>
            &#62;
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  )
}

export default MediaModal
