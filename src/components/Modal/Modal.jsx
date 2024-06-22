import { Link } from "react-router-dom";
import Rating from "../Services/BookSlider/Rating";
import "./Modal.css";

function Modal({ bookData, setOpenModal }) {
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
              className="modal-add-to-cart-input"
            />
            <button className="modal-add-to-cart-btn">
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
