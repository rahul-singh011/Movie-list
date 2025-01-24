import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar({ toggleDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
        <button onClick={toggleDarkMode} className="toggle-dark-mode">
          Toggle Dark Mode
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
