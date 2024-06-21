function HeaderMiddel() {
  return (
    <div className="header-middel flex">
      <div className="header-middel-logo flex">
        <b>Book</b>
        <i className="bi bi-book" />
        <b>Store</b>
      </div>
      <div className="header-middel-search-box">
        <input
          className="header-middel-search-input"
          type="search"
          placeholder="Search in book store..."
        />
        <i className="bi bi-search" />
      </div>
      <div className="header-middle-cart-wrapper">
        <i className="bi bi-cart2" />
      </div>
    </div>
  );
}

export default HeaderMiddel;
