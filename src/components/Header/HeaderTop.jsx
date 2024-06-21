function HeaderTop({ setToggle, toggle }) {
  return (
    <div className=" header-top flex">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="header-top-menu"
      >
        {toggle ? <i className="bi bi-x-lg" /> : <i className="bi bi-list" />}
      </div>
      <div className="header-top-phone">
        <i className="bi bi-telephone-fill" />
        01234567
      </div>
      <div className="header-top-text">Welcom To Online Book Store</div>
      <div className="header-top-link">
        <i className="bi bi-person-fill" />
        Login
      </div>
    </div>
  );
}

export default HeaderTop;
