import "./Cart.css";
import { cartInfo } from "../../assets/data/cart";
import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";

function Cart() {
  const totalPrice = cartInfo.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  return (
    <div className="cart">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartInfo.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <OrderSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default Cart;
