import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

function HeaderMiddel() {
  const { cartItemsLength } = useContext(CartContext);
  return (
    <div className="header-middel flex">
      <Link to="/" className="header-middel-logo flex">
        <b>Book</b>
        <i className="bi bi-book" />
        <b>Store</b>
      </Link>
      <div className="header-middel-search-box">
        <input
          className="header-middel-search-input"
          type="search"
          placeholder="Search in book store..."
        />
        <i className="bi bi-search" />
      </div>

      <Link to="/cart" className="header-middle-cart-wrapper">
        {cartItemsLength > 0 && (
          <b className="cart-notification">{cartItemsLength}</b>
        )}

        <i className="bi bi-cart2" />
      </Link>
    </div>
  );
}

export default HeaderMiddel;
