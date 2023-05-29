import "./index.css"

function Headers() {
  return (
    <header className="headers">
      <div className="bg-sphere"></div>
      <a href="#main_section">Home</a>

      <div className="sections">
        <a href="#projects_section">Mes Projets</a>
        <a href="#cv_section">Mon CV</a>
        <a href="#contact_section">Contactez-moi</a>
      </div>
    </header>
  )
}

export default Headers
