import "./Header.css";
import { useState } from "react";
import { HeaderMiddel, HeaderTop, Navbar } from "../index";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header>
      <HeaderTop toggle={toggleMenu} setToggle={setToggleMenu} />
      <HeaderMiddel />
      <Navbar toggle={toggleMenu} setToggle={setToggleMenu} />
    </header>
  );
}

export default Header;
