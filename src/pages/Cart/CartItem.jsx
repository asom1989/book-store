function CartItem({ item, addToCart, removeFromCart }) {
  const { image, title, author, quantity, price, id } = item;
  return (
    <div className="cart-item">
      <img src={`/books/${image}`} alt={title} className="cart-item-img" />
      <div className="cart-item-info">
        <div>
          <div className="cart-item-book-title">
            <b>Title:</b> {title}
          </div>
          <div className="cart-item-author">
            <b>Author:</b> {author}
          </div>
        </div>
        <div>
          <div className="cart-item-quantity">
            <button
              onClick={() =>
                addToCart({ ...item, quantity: item.quantity + 1 })
              }
            >
              <i className="bi bi-plus-lg" />
            </button>
            <b>{quantity}</b>
            <button
              onClick={() => {
                quantity > 1
                  ? addToCart({ ...item, quantity: item.quantity - 1 })
                  : removeFromCart(id);
              }}
            >
              <i className="bi bi-dash-lg" />
            </button>
          </div>
          <div className="cart-item-price">
            ${(price * quantity).toFixed(2)}
          </div>
          <i onClick={() => removeFromCart(id)} className="bi bi-trash-fill" />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
