import "./Book.css";
import { useParams } from "react-router-dom";
import { books } from "../../assets/data/books";
import Rating from "../../components/Services/BookSlider/Rating";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";

function Book() {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const book = books.find((book) => book.id === +id); //eller parsInt(id)
  return (
    <div className="book">
      <div className="book-content">
        <img
          src={`/books/${book.image}`}
          alt={book.title}
          className="book-content-img"
        />
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-author">
            by <span>{book.author}</span> (Author)
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="book-add-to-cart">
            <input
              type="number"
              min="1"
              max="100"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="book-add-to-cart-input"
            />
            <button
              onClick={() => addToCart({ ...book, quantity: quantity })}
              className="book-add-to-cart-btn"
            >
              <i className="bi bi-cart-plus" />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
        provident praesentium quae accusantium facere numquam.
      </p>
      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break" />
          <b>{book.printLength} Pages</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe" />
          <b>{book.language} </b>
        </div>
        <div className="book-icon">
          <small>Puplication Date</small>
          <i className="bi bi-calendar3" />
          <b>{book.PublicationDate} </b>
        </div>
      </div>
    </div>
  );
}

export default Book;
