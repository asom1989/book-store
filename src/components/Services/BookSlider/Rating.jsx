function Rating({ rating, reviews }) {
  return (
    <div className="rating">
      {rating >= 1 ? (
        <i className="bi bi-star-fill" />
      ) : rating >= 0.5 ? (
        <i className="bi bi-star-half" />
      ) : (
        <i className="bi bi-star" />
      )}
      {rating >= 2 ? (
        <i className="bi bi-star-fill" />
      ) : rating >= 1.5 ? (
        <i className="bi bi-star-half" />
      ) : (
        <i className="bi bi-star" />
      )}
      {rating >= 3 ? (
        <i className="bi bi-star-fill" />
      ) : rating >= 2.5 ? (
        <i className="bi bi-star-half" />
      ) : (
        <i className="bi bi-star" />
      )}
      {rating >= 4 ? (
        <i className="bi bi-star-fill" />
      ) : rating >= 3.5 ? (
        <i className="bi bi-star-half" />
      ) : (
        <i className="bi bi-star" />
      )}
      {rating >= 5 ? (
        <i className="bi bi-star-fill" />
      ) : rating >= 4.5 ? (
        <i className="bi bi-star-half" />
      ) : (
        <i className="bi bi-star" />
      )}
      <span>{rating}</span>
      <span>({reviews} reviews)</span>
    </div>
  );
}

export default Rating;
