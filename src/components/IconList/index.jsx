import "./index.css"

function IconList({ icons }) {
  return (
    <ul className="icon-list">
      {icons &&
        icons.map((icon, index) => (
          <li className="icon" key={index}>
            <a href={icon.link}>
              <img
                src={icon.img}
                alt={icon.title}
                className={icon.reverseColor && "reverse-color"}
              />
            </a>
          </li>
        ))}
    </ul>
  )
}

export default IconList
