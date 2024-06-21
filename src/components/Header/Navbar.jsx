function Navbar({ setToggle, toggle }) {
  return (
    <nav className="flex" style={{ left: toggle && "0" }}>
      <ul>
        <li onClick={() => setToggle(false)} className="navbar-link">
          Home
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          Aurthors
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          About Us
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          Contact Us
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          Registar
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
