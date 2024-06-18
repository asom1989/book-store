import { useState } from "react";
import "./BookSlider.css";
import Rating from "./Rating";

function BookSlider({ data }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    direction === "left"
      ? setSlideIndex(slideIndex - 1)
      : setSlideIndex(slideIndex + 1);
  };
  return (
    <article className="book-slider-contanier flex">
      {slideIndex > 0 && (
        <i
          onClick={() => handleClick("left")}
          className="bi bi-chevron-left book-slider-arrow-left"
        />
      )}

      <div
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
        className="book-slider-wrapper"
      >
        {data.map((item) => (
          <div key={item.id} className="book-slide-item">
            <img
              src={`/books/${item.image}`}
              alt={item.title}
              className="book-slide-item-img"
            />
            <h3 className="book-slide-item-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <p className="book-slide-item-price">{item.price} $</p>
            <div className="book-slider-icons-wrapper">
              <i className="bi bi-eye-fill" />
              <i className="bi bi-cart-plus" />
            </div>
          </div>
        ))}
      </div>
      {slideIndex <= data.length - 1 && (
        <i
          onClick={() => handleClick("right")}
          className="bi bi-chevron-right book-slider-arrow-right"
        />
      )}
    </article>
  );
}

export default BookSlider;
