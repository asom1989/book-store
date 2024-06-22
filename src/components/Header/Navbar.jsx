import { Link } from "react-router-dom";

function Navbar({ setToggle, toggle }) {
  return (
    <nav className="flex" style={{ left: toggle && "0" }}>
      <ul>
        <Link to="/" onClick={() => setToggle(false)} className="navbar-link">
          Home
        </Link>
        <Link
          to="/authors"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Aurthors
        </Link>
        <Link
          to="/about"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Contact Us
        </Link>
        <Link
          to="/register"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Registar
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
