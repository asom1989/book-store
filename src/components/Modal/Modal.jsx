import { Link } from "react-router-dom";
import Rating from "../Services/BookSlider/Rating";
import "./Modal.css";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";

function Modal({ bookData, setOpenModal }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const { image, title, inStock, rating, reviews, author, price, id } =
    bookData;
  return (
    <div onClick={() => setOpenModal(false)} className="modal-container">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <i
          onClick={() => setOpenModal(false)}
          className="bi bi-x-circle-fill modal-icon"
        />
        <div className="modal-content-img">
          <img src={`/books/${image}`} alt={title} />
        </div>
        <div className="modal-content-info">
          <h5 className="modal-content-info-title">{title}</h5>
          <div className="modal-content-info-stock">
            <b>Status: </b> {inStock ? "in stock " : "not in stock"}
          </div>
          <Rating rating={rating} reviews={reviews} />
          <div className="modal-content-info-author">
            <b>Author: </b>
            {author}
          </div>
          <div className="modal-content-info-price">
            <b>Price: </b>${price}
          </div>
          <div className="modal-add-to-cart">
            <input
              type="number"
              min={1}
              max={100}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="modal-add-to-cart-input"
            />
            <button
              onClick={() => addToCart({ ...bookData, quantity: quantity })}
              className="modal-add-to-cart-btn"
            >
              <i className="bi bi-cart-plus" />
              Add To Cart
            </button>
          </div>
          <Link to={`/book/${id}`} className="modal-content-info-link">
            See More Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
